import Head from 'next/head';

export default function SEO({ title = null }) {
  return <Head>
    <title>
      {title ? `${title} |` : ''} Ballaballa-Balkan Podcast
    </title>
  </Head>
}
