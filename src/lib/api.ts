import { createDirectus, rest } from '@directus/sdk';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const DIRECTUS_URL: string =
  "https://srithanigai-garments-backend.onrender.com";
export const directus = createDirectus(DIRECTUS_URL).with(rest());

/** Resolves a Directus files UUID to `https://…/assets/{id}`. */
export function getDirectusAssetUrl(
  fileId: string | null | undefined
): string | null {
  if (fileId == null) return null;
  const id = typeof fileId === "string" ? fileId.trim() : String(fileId);
  if (!id) return null;
  return `${DIRECTUS_URL}/assets/${id}`;
}

export function getAssetUrl(id: string | null | undefined): string {
  return getDirectusAssetUrl(id) ?? "";
}

export async function fetchData(endpoint: string) {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function postData(endpoint: string, data: any) {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to post');
  return res.json();
}

export function handleApiError(error: any) {
  // Customize error handling as needed
  console.error('API Error:', error);
  return { error: error.message || 'Unknown error' };
}
