import { createClient } from "contentful";

export const contentfulClient = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENT_FULL_DELIVERY_KEY,
});