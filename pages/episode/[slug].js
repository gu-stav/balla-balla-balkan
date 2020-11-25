import { getEpisode, getEpisodes } from "../../lib/episodes";
import { getSettings } from "../../lib/settings";

import Blocks from "../../components/Blocks";
import EpisodeFeatured from "../../components/EpisodeFeatured";
import Paragraph from "../../components/Paragraph";
import Layout from "../../components/Layout";

const EpisodePage = ({
  episode: { title, number, excerpt, image, blocks },
  settings,
}) => (
  <Layout>
    <article>
      <EpisodeFeatured
        tagline={`Episode ${number}`}
        title={title}
        path={"/"}
        image={image}
        backgroundImage={settings.image}
      />

      <Blocks
        blocks={[
          {
            type: "richtext",
            richtext: excerpt,
          },

          ...blocks,
        ]}
      />
    </article>
  </Layout>
);

export const getStaticPaths = () => {
  const episodes = getEpisodes();

  return {
    fallback: false,
    paths: episodes.map(({ path }) => path),
  };
};

export async function getStaticProps({ params: { slug } }) {
  const episode = getEpisode(slug);
  const settings = getSettings();

  return {
    props: {
      episode,
      settings,
    },
  };
}

export default EpisodePage;
