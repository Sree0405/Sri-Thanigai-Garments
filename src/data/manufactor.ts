import { readItems } from "@directus/sdk";
import { directus } from "@/src/lib/api";

export async function getmanufactoring() {
  try {
    const Manufacturing = await directus.request(
      readItems("manufactoring")
    );

    return Manufacturing || [];
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return [];
  }
}