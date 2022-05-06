import { contentful } from "./config";
export default async function getAll(type) {
  const response = await contentful.getEntries({
    content_type: type,
  });

  return response;
}
