export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  subcategoryId: string;
  description: string;
  shortDescription: string;
  features: string[];
  fabricIds: string[];
  image: string;
}

export const products: Product[] = [
  // Men's Shirts
  { id: "formal-shirt", name: "Formal Shirts", slug: "formal-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "Premium formal shirts crafted with precision for a polished professional look. Available in a wide range of colours and patterns.", shortDescription: "Classic formal shirts for a professional look.", features: ["Precision tailoring", "Collar stiffening", "Pearl buttons", "Multiple fits available", "Wrinkle-resistant finish"], fabricIds: ["cotton", "polyester-cotton", "linen"], image: "/placeholder.svg" },
  { id: "casual-shirt", name: "Casual Shirts", slug: "casual-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "Comfortable and stylish casual shirts perfect for everyday wear. Designed with modern fits and trendy patterns.", shortDescription: "Stylish casual shirts for everyday comfort.", features: ["Relaxed fit", "Soft feel", "Trendy patterns", "Durable stitching", "Easy care fabric"], fabricIds: ["cotton", "rayon", "flannel"], image: "/placeholder.svg" },
  { id: "cotton-shirt", name: "Cotton Shirts", slug: "cotton-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "100% pure cotton shirts that are breathable, soft, and perfect for warm weather. Available in solids and prints.", shortDescription: "Breathable pure cotton shirts.", features: ["100% cotton", "Breathable", "Soft hand feel", "Pre-shrunk", "Colour fast"], fabricIds: ["cotton"], image: "/placeholder.svg" },
  { id: "linen-shirt", name: "Linen Shirts", slug: "linen-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "Luxurious linen shirts with a natural texture and superior breathability. Ideal for summer and resort wear.", shortDescription: "Luxurious linen shirts for summer.", features: ["Premium linen", "Natural texture", "Ultra-breathable", "Light weight", "Elegant drape"], fabricIds: ["linen"], image: "/placeholder.svg" },
  { id: "check-shirt", name: "Check Shirts", slug: "check-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "Classic check pattern shirts available in multiple colour combinations and check sizes. Perfect for semi-formal and casual occasions.", shortDescription: "Classic check pattern shirts.", features: ["Multiple check patterns", "Colour-fast dyes", "Reinforced seams", "Comfortable fit", "Versatile styling"], fabricIds: ["cotton", "polyester-cotton", "flannel"], image: "/placeholder.svg" },
  { id: "plain-shirt", name: "Plain Shirts", slug: "plain-shirts", categoryId: "mens", subcategoryId: "mens-shirts", description: "Solid colour plain shirts that are wardrobe essentials. Clean, minimal and versatile for any occasion.", shortDescription: "Solid colour wardrobe essentials.", features: ["Solid colours", "Clean finish", "Versatile", "Multiple collar styles", "Quality buttons"], fabricIds: ["cotton", "polyester-cotton", "linen"], image: "/placeholder.svg" },
  // Men's Pants
  { id: "formal-pants", name: "Formal Trousers", slug: "formal-trousers", categoryId: "mens", subcategoryId: "mens-pants", description: "Well-tailored formal trousers with sharp creases and comfortable fit for professional settings.", shortDescription: "Sharp formal trousers for professionals.", features: ["Sharp crease", "Comfort waistband", "Multiple fits", "Wrinkle-resistant"], fabricIds: ["polyester-cotton", "twill"], image: "/placeholder.svg" },
  { id: "casual-pants", name: "Casual Pants", slug: "casual-pants", categoryId: "mens", subcategoryId: "mens-pants", description: "Relaxed casual pants for everyday wear, available in chinos and jogger styles.", shortDescription: "Comfortable casual pants.", features: ["Relaxed fit", "Soft fabric", "Multiple colours", "Durable"], fabricIds: ["cotton", "twill"], image: "/placeholder.svg" },
  // Men's Nightwear
  { id: "mens-pyjama-set", name: "Pyjama Sets", slug: "pyjama-sets", categoryId: "mens", subcategoryId: "mens-nightwear", description: "Comfortable pyjama sets for men crafted from soft breathable fabrics for a restful night.", shortDescription: "Soft and comfortable pyjama sets.", features: ["Soft fabric", "Elastic waist", "Breathable", "Easy care"], fabricIds: ["cotton", "flannel"], image: "/placeholder.svg" },
  // Women's Tops
  { id: "womens-casual-top", name: "Casual Tops", slug: "casual-tops", categoryId: "womens", subcategoryId: "womens-tops", description: "Trendy and comfortable casual tops for women in a variety of styles, colours and prints.", shortDescription: "Trendy casual tops for women.", features: ["Modern designs", "Soft fabrics", "Vibrant prints", "Comfortable fit"], fabricIds: ["cotton", "rayon"], image: "/placeholder.svg" },
  { id: "womens-blouse", name: "Blouses", slug: "blouses", categoryId: "womens", subcategoryId: "womens-tops", description: "Elegant blouses with refined detailing, perfect for formal and semi-formal occasions.", shortDescription: "Elegant blouses for every occasion.", features: ["Refined detailing", "Premium fabric", "Elegant drape", "Multiple sleeve styles"], fabricIds: ["rayon", "polyester-cotton"], image: "/placeholder.svg" },
  { id: "womens-kurti", name: "Kurtis", slug: "kurtis", categoryId: "womens", subcategoryId: "womens-tops", description: "Traditional and modern kurtis crafted with beautiful prints and embroidery work.", shortDescription: "Beautiful traditional and modern kurtis.", features: ["Traditional prints", "Embroidery options", "Comfortable length", "Vibrant colours"], fabricIds: ["cotton", "rayon"], image: "/placeholder.svg" },
  // Women's Dresses
  { id: "womens-casual-dress", name: "Casual Dresses", slug: "casual-dresses", categoryId: "womens", subcategoryId: "womens-dresses", description: "Stylish casual dresses for women designed for comfort and elegance.", shortDescription: "Stylish and comfortable casual dresses.", features: ["Modern silhouettes", "Soft fabrics", "Easy movement", "Versatile styling"], fabricIds: ["cotton", "rayon"], image: "/placeholder.svg" },
  // Women's Nightwear
  { id: "womens-nightwear-set", name: "Nightwear Sets", slug: "nightwear-sets", categoryId: "womens", subcategoryId: "womens-nightwear", description: "Comfortable nightwear sets for women in soft breathable fabrics.", shortDescription: "Comfortable nightwear for women.", features: ["Ultra-soft", "Breathable", "Relaxed fit", "Easy care"], fabricIds: ["cotton", "rayon"], image: "/placeholder.svg" },
  // Kids Casual
  { id: "kids-tshirt", name: "T-Shirts", slug: "t-shirts", categoryId: "kids", subcategoryId: "kids-casual", description: "Fun and colourful T-shirts for kids made from soft, durable cotton.", shortDescription: "Colourful cotton T-shirts for kids.", features: ["Soft cotton", "Fun prints", "Durable", "Colour fast", "Skin-friendly"], fabricIds: ["cotton"], image: "/placeholder.svg" },
  { id: "kids-shorts-set", name: "Shorts Sets", slug: "shorts-sets", categoryId: "kids", subcategoryId: "kids-casual", description: "Matching shorts and top sets for kids, perfect for playtime and outings.", shortDescription: "Fun matching shorts and top sets.", features: ["Matching set", "Comfortable", "Easy movement", "Vibrant colours"], fabricIds: ["cotton"], image: "/placeholder.svg" },
  // Kids Comfort
  { id: "kids-night-suit", name: "Night Suits", slug: "night-suits", categoryId: "kids", subcategoryId: "kids-comfort", description: "Soft and cosy night suits for children, designed for comfortable sleep.", shortDescription: "Cosy night suits for children.", features: ["Ultra-soft", "Skin-friendly", "Easy care", "Fun designs"], fabricIds: ["cotton", "flannel"], image: "/placeholder.svg" },
  { id: "kids-comfort-set", name: "Comfort Clothing", slug: "comfort-clothing", categoryId: "kids", subcategoryId: "kids-comfort", description: "Everyday comfort clothing for kids made with gentle, breathable fabrics.", shortDescription: "Gentle everyday comfort wear.", features: ["Breathable", "Gentle on skin", "Durable", "Easy wash"], fabricIds: ["cotton"], image: "/placeholder.svg" },
];

export function getProductsBySubcategory(subcategoryId: string): Product[] {
  return products.filter((p) => p.subcategoryId === subcategoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByFabricId(fabricId: string): Product[] {
  return products.filter((p) => p.fabricIds.includes(fabricId));
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, limit);
}
