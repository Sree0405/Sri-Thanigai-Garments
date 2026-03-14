import { DIRECTUS_URL } from "../lib/api";
export async function submitContact(data:any){

  await fetch(`${DIRECTUS_URL}/items/contact_messages`,{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(data)

  });

}
export async function submitTestimonials(data: any) {
  await fetch(`${DIRECTUS_URL}/items/testimonials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}