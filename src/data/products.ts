const DIRECTUS_URL = "https://srithanigai-garments-backend.onrender.com";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  coverImage: string | null;

  category: {
    id: number;
    name: string;
    slug: string;
  };

  features?: string[];
  images?: string[];
}

export async function getProductsByCategorySlug(
  slug: string
): Promise<Product[]> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/products?filter[status][_eq]=published&filter[category][slug][_eq]=${slug}&fields=*,category.*`,
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
    coverImage: item.cover_image,
    category: item.category,
    features: parseFeatures(item.features),
    images: item.images
  }));
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

  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    shortDescription: item.short_description,
    coverImage: item.cover_image,
    category: item.category,

    features: parseFeatures(item.features),

    images: item.images
  };
}
function parseFeatures(editorData: any): string[] {
  if (!editorData?.blocks) return [];

  return editorData.blocks
    .filter((block: any) => block.type === "paragraph")
    .map((block: any) => block.data.text);
}