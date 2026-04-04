import { DIRECTUS_URL, getDirectusAssetUrl } from "@/src/lib/api";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  /** Resolved asset URL from `cover_image`, or first gallery image when cover is unset. */
  cover_image: string | null;

  category: {
    id: number;
    name: string;
    slug: string;
  };

  features?: string[];
  /** Gallery image URLs (from `images.directus_files_id`), cover first when set, de-duplicated. */
  images: string[];
}

function mapDirectusProductImages(item: {
  cover_image?: string | null;
  images?: Array<{ directus_files_id?: string | null }> | null;
}): { cover_image: string | null; images: string[] } {
  const rows = Array.isArray(item.images) ? item.images : [];
  const galleryUrls = rows
    .map((row) => getDirectusAssetUrl(row?.directus_files_id ?? null))
    .filter((url): url is string => Boolean(url));

  const coverUrl = getDirectusAssetUrl(item.cover_image ?? null);
  const coverForCard = coverUrl ?? galleryUrls[0] ?? null;

  const ordered: string[] = [];
  const pushUnique = (url: string | null) => {
    if (!url || ordered.includes(url)) return;
    ordered.push(url);
  };

  pushUnique(coverUrl);
  for (const u of galleryUrls) pushUnique(u);
  if (!ordered.length) pushUnique(coverForCard);

  return {
    cover_image: coverForCard,
    images: ordered,
  };
}

export async function getProductsByCategorySlug(
  slug: string
): Promise<Product[]> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/products?filter[status][_eq]=published&filter[category][slug][_eq]=${slug}&fields=*,category.*,images.*`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  return json.data.map((item: any) => {
    const { cover_image, images } = mapDirectusProductImages(item);
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      description: item.description,
      shortDescription: item.short_description,
      cover_image,
      category: item.category,
      features: parseFeatures(item.features),
      images,
    };
  });
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/products?filter[slug][_eq]=${slug}&fields=*,category.*,images.*`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  if (!json.data.length) return null;

  const item = json.data[0];
  const { cover_image, images } = mapDirectusProductImages(item);

  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    shortDescription: item.short_description,
    cover_image,
    category: item.category,
    features: parseFeatures(item.features),
    images,
  };
}
function parseFeatures(editorData: any): string[] {
  if (!editorData?.blocks) return [];

  return editorData.blocks
    .filter((block: any) => block.type === "paragraph")
    .map((block: any) => block.data.text);
}