import { contentful } from "./config";

export default async function getSingleBySlug(slug, type) {
  const response = await contentful.getEntries({
    "fields.slug": slug,
    content_type: type,
  });
  return response;
}
