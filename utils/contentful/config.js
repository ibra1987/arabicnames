import { createClient } from "contentful";

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACEID,
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY,
});
