export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string | null;
}
const DIRECTUS_URL = "https://directus-latest-butj.onrender.com";

export async function getCategories(): Promise<Category[]> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/categories?filter[status][_eq]=published`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    shortDescription: item.short_description,
    image: item.image
  }));
}
export  const categories = await getCategories();
export async function getCategoryBySlug(slug: string): Promise<Category | null> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/categories?filter[slug][_eq]=${slug}`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  if (!json.data.length) return null;

  const item = json.data[0];

  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    shortDescription: item.short_description,
    image: item.image
  };
}
