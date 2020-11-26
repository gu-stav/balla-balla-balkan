import { readFileContents, createSlug } from "./content";

const sortByPublicationDate = (
  { data: { publication_at: d1 } },
  { data: { publication_at: d2 } }
) => {
  if (d1 < d2) {
    return 1;
  }

  if (d1 > d2) {
    return -1;
  }

  return 0;
};

export const getEpisodes = (limit = false) => {
  const episodes = readFileContents("content/episodes");

  return episodes
    .sort(sortByPublicationDate)
    .map((episode) => {
      const externalLinks = ["apple", "spotify", "soundcloud"].reduce(
        (acc, network) => {
          const url = episode.data[`${network}_link`] || null;

          if (url) {
            acc.push([network, url]);
          }

          return acc;
        },
        []
      );

      return {
        ...episode.data,
        externalLinks,
        number: `${episode.data.number}`.padStart(2, "0"),
        path: `/episode/${createSlug(episode.data.title)}`,
        slug: `${createSlug(episode.data.title)}`,
        publication_at: episode.data.publication_at.toString(),
      };
    })
    .slice(0, limit || episodes.length);
};

export const getEpisode = (slug) => {
  const episodes = getEpisodes();

  return episodes.filter(({ slug: episodeSlug }) => episodeSlug === slug)[0];
};
