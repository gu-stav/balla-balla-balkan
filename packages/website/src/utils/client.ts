import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "puzuao21",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-06",
});
