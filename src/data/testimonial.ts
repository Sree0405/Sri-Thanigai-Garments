const DIRECTUS_URL = "https://directus-latest-butj.onrender.com";

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  testimonial: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {

  const res = await fetch(
    `${DIRECTUS_URL}/items/testimonials`,
    {
      next: { revalidate: 60 }
    }
  );

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    company: item.company,
    rating: item.rating,
    testimonial: item.testimonial
  }));
}
export const testimonials = getTestimonials()
// export const testimonials = [
//   {
//     id: 1,
//     name: "Michael Carter",
//     company: "Urban Threads",
//     rating: 5,
//     testimonial:
//       "Sri Thanigai Garments delivered exceptional quality and maintained perfect timelines. Their production standards are truly impressive."
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     company: "North Apparel Co.",
//     rating: 5,
//     testimonial:
//       "We’ve partnered with many manufacturers before, but the professionalism and quality control here stands out."
//   },
//   {
//     id: 3,
//     name: "Daniel Lee",
//     company: "Prime Wear Ltd",
//     rating: 4,
//     testimonial:
//       "Reliable manufacturing partner with consistent fabric quality and excellent communication throughout production."
//   },
//   {
//     id: 4,
//     name: "Olivia Brown",
//     company: "Global Style House",
//     rating: 5,
//     testimonial:
//       "Our export orders were handled seamlessly. The team ensured every detail was executed perfectly."
//   },
//   {
//     id: 5,
//     name: "Ethan Wilson",
//     company: "FashionCore",
//     rating: 5,
//     testimonial:
//       "Great craftsmanship and dependable delivery schedules. Highly recommended for premium garment production."
//   }
// ];