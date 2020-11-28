import { getPage, getPages } from "../lib/pages";

import Layout from "../components/Layout";
import Stack from "../components/Stack";

const Page = ({ title }) => (
  <Layout>
    <Stack gap="tiny" center>
      {title}
    </Stack>
  </Layout>
);

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getPages().map(({ path }) => path),
  };
}

export function getStaticProps({ params: { slug } }) {
  return {
    props: {
      ...getPage(slug),
    },
  };
}

export default Page;
