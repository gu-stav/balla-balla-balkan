import Head from 'next/head';

export default function SEO({ title = null, description = "Der Podcast für Polemik und Palaver vom Ballaballa-Balkan. Mit dem grimmigen „Kroaten“ Danijel Majić und dem Nationalismusbehinderten Krsto Lazarević.", ogImage }) {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? (`https://${process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'ballaballa-balkan.de' : process.env.NEXT_PUBLIC_VERCEL_URL}`) : 'http://localhost:3000';
  const resizeBaseUrl = `${vercelUrl}/api/resize?url=${vercelUrl}${ogImage}`;

  return <Head>
    <title>
      {title ? `${title} | Ballaballa-Balkan Podcast` : 'Neues vom Ballaballa-Balkan'}
    </title>

    <meta name="description" content={description} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="ballaballablkn" />

    {ogImage && (
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${resizeBaseUrl}&size=twitter`} />
      </>
    )}

    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />

    {ogImage && (
      <>
        <meta name="og:image" content={`${resizeBaseUrl}&size=facebook`} />
      </>
    )}
  </Head>
}
