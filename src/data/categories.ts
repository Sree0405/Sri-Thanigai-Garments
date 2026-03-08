export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "mens",
    name: "Men & Boys Wear",
    slug: "mens-boys-wear",
    description: "Premium quality garments for men and boys, crafted with precision using the finest fabrics. Our men's collection includes formal shirts, casual shirts, cotton shirts, linen shirts, check shirts, and plain shirts — all manufactured to international quality standards.",
    shortDescription: "Formal & casual shirts, outerwear and more for men and boys.",
    image: "/placeholder.svg",
  },
  {
    id: "womens",
    name: "Women & Girls Wear",
    slug: "womens-girls-wear",
    description: "Elegant and stylish garments for women and girls, designed with attention to detail and made from high-quality fabrics. Our women's collection features tops, dresses, nightwear, kurtis, blouses, and casual wear.",
    shortDescription: "Tops, dresses, nightwear and casual wear for women and girls.",
    image: "/placeholder.svg",
  },
  {
    id: "kids",
    name: "Kids Wear",
    slug: "kids-wear",
    description: "Comfortable and durable clothing for children, made with soft, skin-friendly fabrics. Our kids collection includes casual wear, comfort clothing, T-shirts, shorts sets, and night suits.",
    shortDescription: "Comfortable casual and comfort clothing for kids.",
    image: "/placeholder.svg",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
