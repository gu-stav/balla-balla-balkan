import { getPage, getPages } from "../lib/pages";

import Article from "../components/Article";
import Blocks from "../components/Blocks";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Stack from "../components/Stack";

const Page = ({ page: { title, blocks } }) => (
  <Layout>
    <SEO title={title} />

    <Stack center>
      <Article>
        <Headline level={1}>{title}</Headline>
        <Blocks blocks={blocks} />
      </Article>
    </Stack>
  </Layout>
);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getPages().map(({ slug }) => `/${slug}`),
  };
}

export async function getStaticProps({ params: { slug } }) {
  const page = getPage(slug[0]);

  return {
    props: {
      page,
    },
  };
}

export default Page;
