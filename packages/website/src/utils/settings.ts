import { client } from "./client";

export async function getSettings() {
  const settings = await client.fetch(`*[_type == "settings"][0]`);

  return settings;
}
