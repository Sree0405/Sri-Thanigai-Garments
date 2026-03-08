export interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const subcategories: Subcategory[] = [
  // Men & Boys
  { id: "mens-shirts", categoryId: "mens", name: "Shirts", slug: "shirts", description: "Premium formal and casual shirts for men and boys, available in cotton, linen, check and plain varieties.", image: "/placeholder.svg" },
  { id: "mens-pants", categoryId: "mens", name: "Pants", slug: "pants", description: "Well-tailored trousers and pants for men and boys in various fabrics and styles.", image: "/placeholder.svg" },
  { id: "mens-nightwear", categoryId: "mens", name: "Nightwear", slug: "nightwear", description: "Comfortable nightwear sets for men and boys crafted from soft, breathable fabrics.", image: "/placeholder.svg" },
  // Women & Girls
  { id: "womens-tops", categoryId: "womens", name: "Tops", slug: "tops", description: "Stylish and elegant tops for women and girls in a variety of designs and fabrics.", image: "/placeholder.svg" },
  { id: "womens-dresses", categoryId: "womens", name: "Dresses", slug: "dresses", description: "Beautiful dresses for women and girls crafted with premium fabrics and modern designs.", image: "/placeholder.svg" },
  { id: "womens-nightwear", categoryId: "womens", name: "Nightwear", slug: "nightwear", description: "Comfortable and soft nightwear for women and girls.", image: "/placeholder.svg" },
  // Kids
  { id: "kids-casual", categoryId: "kids", name: "Casual Wear", slug: "casual-wear", description: "Fun and comfortable casual clothing for kids made with durable, skin-friendly fabrics.", image: "/placeholder.svg" },
  { id: "kids-comfort", categoryId: "kids", name: "Comfort Wear", slug: "comfort-wear", description: "Ultra-soft comfort clothing designed for children's active lifestyle.", image: "/placeholder.svg" },
];

export function getSubcategoriesByCategory(categoryId: string): Subcategory[] {
  return subcategories.filter((s) => s.categoryId === categoryId);
}

export function getSubcategoryBySlug(categoryId: string, slug: string): Subcategory | undefined {
  return subcategories.find((s) => s.categoryId === categoryId && s.slug === slug);
}
