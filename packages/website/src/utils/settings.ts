import { client } from "./client";

type Settings = {
  ogImageFallback: string;
  title: string;
  description: string;
  social_media: { type: 'apple' | 'soundcloud' | 'spotify'; url: string }[];
};

export async function getSettings(): Promise<Settings> {
  const settings = await client.fetch(`*[_type == "settings"]{
    "ogImageFallback": ogImageFallback.asset->url,
    title,
    description,
    social_media
  }[0]`);

  return settings;
}
