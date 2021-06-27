import Head from 'next/head';

export default function SEO({ title = null, description = "Der Podcast für Polemik und Palaver vom Ballaballa-Balkan. Mit dem grimmigen „Kroaten“ Danijel Majić und dem Nationalismusbehinderten Krsto Lazarević.", ogImage }) {
  return <Head>
    <title>
      {title ? `${title} | Ballaballa-Balkan Podcast` : 'Neues vom Ballaballa-Balkan'}
    </title>

    <meta name="description" content={description} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="description" />

    {ogImage && (
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
      </>
    )}

    <meta name="og:title" content={title} />
    <meta name="og:description" content="description" />

    {ogImage && (
      <>
        <meta name="og:image" content={ogImage} />
      </>
    )}
  </Head>
}
