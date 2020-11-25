import Authors from "../components/Authors";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

import { getAuthors } from "../lib/authors";
import { getEpisodes } from "../lib/episodes";
import { getSettings } from "../lib/settings";

const HomePage = ({ authors, episodes, settings }) => {
  const featuredEpisode = episodes.slice(0, 1)[0];
  const recentEpisodes = episodes.slice(1, episodes.length);

  return (
    <Layout>
      <Stack center>
        <EpisodeFeatured
          {...featuredEpisode}
          backgroundImage={settings?.image}
        />
        <EpisodeList episodes={recentEpisodes} />
        <Authors authors={authors} />
      </Stack>
    </Layout>
  );
};

export async function getStaticProps() {
  const authors = getAuthors();
  const episodes = getEpisodes(5);
  const settings = getSettings();

  console.log(settings);

  return {
    props: {
      authors,
      episodes,
      settings,
    },
  };
}

export default HomePage;
