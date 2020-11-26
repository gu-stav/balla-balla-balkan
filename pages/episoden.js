import EpisodeList from "../components/EpisodeList/EpisodeList";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

import { getEpisodes } from "../lib/episodes";

const EpisodesPage = ({ episodes }) => {
  return (
    <Layout>
      <Stack center>
        <EpisodeList episodes={episodes} />
      </Stack>
    </Layout>
  );
};

export async function getStaticProps() {
  const episodes = getEpisodes();

  return {
    props: {
      episodes,
    },
  };
}

export default EpisodesPage;
