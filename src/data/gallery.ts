import { readItems } from "@directus/sdk";
import { directus } from "@/src/lib/api";

export async function getGallery() {
  try {
    const gallery = await directus.request(
      readItems("gallery", {
        fields: ["id", "title", "category", "images"],
      })
    );

    return gallery || [];
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return [];
  }
}