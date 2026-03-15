const DIRECTUS_URL = "https://directus-latest-butj.onrender.com";

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  testimonial: string;
}

interface DirectusTestimonialResponse {
  data: Testimonial[];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(`${DIRECTUS_URL}/items/testimonials`, {
    next: { revalidate: 60 },
  });

  const json: DirectusTestimonialResponse = await res.json();

  return json.data.map((item) => ({
    id: item.id,
    name: item.name,
    company: item.company,
    rating: item.rating,
    testimonial: item.testimonial,
  }));
}