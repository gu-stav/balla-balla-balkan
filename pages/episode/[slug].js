import { getEpisode, getEpisodes } from "../../lib/episodes";
import { getSettings } from "../../lib/settings";

import Article from "../../components/Article";
import Blocks from "../../components/Blocks";
import EpisodeFeatured from "../../components/EpisodeFeatured";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Stack from "../../components/Stack";

const EpisodePage = ({
  episode: { title, number, image, blocks, excerpt, externalLinks, soundcloud_link, og_image },
  settings,
}) => (
  <Layout>
    <SEO title={title} description={excerpt} ogImage={og_image || image} />

    <Stack gap="tiny" center>
      <EpisodeFeatured
        tagline={number && number !== 'undefined' ? `Episode ${number}` : ''}
        title={title}
        image={image}
        backgroundImage={settings.image}
        externalLinks={externalLinks}
        number={number}
        soundcloud_link={soundcloud_link}
      />
      <article>
        <Article>
          {blocks && (
            <Blocks
              blocks={blocks}
            />
          )}
        </Article>
      </article>
    </Stack>
  </Layout>
);

export async function getStaticPaths() {
  const episodes = getEpisodes();

  return {
    fallback: false,
    paths: episodes.map(({ path }) => path),
  };
}

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
