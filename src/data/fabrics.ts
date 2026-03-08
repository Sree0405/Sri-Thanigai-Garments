export interface Fabric {
  id: string;
  name: string;
  slug: string;
  description: string;
  properties: string[];
  careInstructions: string[];
  image: string;
}

export const fabrics: Fabric[] = [
  {
    id: "cotton",
    name: "Cotton",
    slug: "cotton",
    description: "100% natural cotton fabric known for its breathability, softness, and durability. Ideal for everyday wear in warm climates.",
    properties: ["Breathable", "Soft", "Durable", "Hypoallergenic", "Absorbent"],
    careInstructions: ["Machine wash cold", "Tumble dry low", "Iron medium heat", "Do not bleach"],
    image: "/placeholder.svg",
  },
  {
    id: "linen",
    name: "Linen",
    slug: "linen",
    description: "Premium linen fabric with a natural texture that is lightweight and highly breathable. Perfect for summer garments and formal wear.",
    properties: ["Lightweight", "Highly breathable", "Natural texture", "Strong fiber", "Eco-friendly"],
    careInstructions: ["Hand wash or gentle cycle", "Air dry", "Iron while damp", "Dry clean recommended"],
    image: "/placeholder.svg",
  },
  {
    id: "polyester-cotton",
    name: "Polyester-Cotton Blend",
    slug: "polyester-cotton-blend",
    description: "A balanced blend of polyester and cotton offering wrinkle resistance with the comfort of cotton. Great for formal and casual shirts.",
    properties: ["Wrinkle-resistant", "Easy care", "Durable", "Color retention", "Shape holding"],
    careInstructions: ["Machine wash warm", "Tumble dry medium", "Low iron if needed"],
    image: "/placeholder.svg",
  },
  {
    id: "rayon",
    name: "Rayon",
    slug: "rayon",
    description: "Soft and smooth rayon fabric with excellent drape, commonly used for women's tops, dresses and nightwear.",
    properties: ["Silky feel", "Excellent drape", "Breathable", "Lightweight", "Vibrant colors"],
    careInstructions: ["Hand wash cold", "Do not wring", "Hang dry", "Low iron on reverse"],
    image: "/placeholder.svg",
  },
  {
    id: "twill",
    name: "Twill",
    slug: "twill",
    description: "Sturdy twill-weave fabric known for its diagonal rib pattern, durability and resistance to wrinkles. Popular for pants and structured shirts.",
    properties: ["Durable", "Wrinkle-resistant", "Diagonal weave", "Structured", "Heavy-weight"],
    careInstructions: ["Machine wash cold", "Tumble dry low", "Iron medium heat"],
    image: "/placeholder.svg",
  },
  {
    id: "flannel",
    name: "Flannel",
    slug: "flannel",
    description: "Soft brushed flannel fabric that provides warmth and comfort. Ideal for casual shirts and nightwear.",
    properties: ["Soft brushed texture", "Warm", "Comfortable", "Breathable", "Lightweight warmth"],
    careInstructions: ["Machine wash cold", "Tumble dry low", "Do not iron at high heat"],
    image: "/placeholder.svg",
  },
];

export function getFabricBySlug(slug: string): Fabric | undefined {
  return fabrics.find((f) => f.slug === slug);
}

export function getFabricsByIds(ids: string[]): Fabric[] {
  return fabrics.filter((f) => ids.includes(f.id));
}
