import Head from 'next/head';

export default function SEO({ title = null, description = "Der Podcast für Polemik und Palaver vom Ballaballa-Balkan. Mit dem grimmigen „Kroaten“ Danijel Majić und dem Nationalismusbehinderten Krsto Lazarević." }) {
  return <Head>
    <title>
      {title ? `${title} | Ballaballa-Balkan Podcast` : 'Neues vom Ballaballa-Balkan'}
    </title>

    <meta name="description" content={description} />
  </Head>
}
