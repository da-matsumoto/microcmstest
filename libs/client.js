import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'inreso',
  apiKey: process.env.API_KEY,
});