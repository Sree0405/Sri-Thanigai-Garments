import { DIRECTUS_URL, getDirectusAssetUrl } from "@/src/lib/api";

export interface Category {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  /** Directus `assets/{uuid}` URL when `image` is a files UUID */
  image: string | null;
  /**
   * Key for static `subcategories.ts` (`mens` | `womens` | `kids`), derived from slug.
   */
  subcategoryGroupId: string;
}

/** Maps Directus category slug → id used in local subcategory definitions */
function subcategoryGroupFromSlug(slug: string): string {
  if (slug.startsWith("mens")) return "mens";
  if (slug.startsWith("womens")) return "womens";
  if (slug.startsWith("kids")) return "kids";
  return slug;
}

function mapCategoryRow(item: Record<string, unknown>): Category {
  const slug = item.slug as string;
  return {
    id: item.id as number | string,
    name: item.name as string,
    slug,
    description: item.description as string,
    shortDescription: item.short_description as string,
    image: getDirectusAssetUrl(
      typeof item.image === "string" ? item.image : null
    ),
    subcategoryGroupId: subcategoryGroupFromSlug(slug),
  };
}

export async function getCategories(): Promise<Category[]> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/categories?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  return json.data.map((item: Record<string, unknown>) => mapCategoryRow(item));
}
export const categories = await getCategories();
export async function getCategoryBySlug(slug: string): Promise<Category | null> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/categories?filter[slug][_eq]=${slug}`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  if (!json.data.length) return null;

  const item = json.data[0] as Record<string, unknown>;

  return mapCategoryRow(item);
}
