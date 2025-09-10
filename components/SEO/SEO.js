import Head from "next/head";

function getTitle(title, postfix = false) {
  if (title) {
    if (postfix) {
      return `${title} | Ballaballa-Balkan Podcast`;
    } else {
      return title;
    }
  }

  return "Neues vom Ballaballa-Balkan";
}

export default function SEO({
  title = null,
  description = "Der Podcast für Polemik und Palaver vom Ballaballa-Balkan. Mit dem grimmigen „Kroaten“ Danijel Majić und dem Nationalismusbehinderten Krsto Lazarević.",
  ogImage = "/images/og-logo.png",
}) {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "ballaballa-balkan.de" : process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const resizeBaseUrl = `${vercelUrl}/api/resize?url=${vercelUrl}${ogImage}`;

  return (
    <Head>
      <title>{getTitle(title, true)}</title>

      <meta name="description" content={description} />

      <meta name="twitter:title" content={getTitle(title)} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="ballaballablkn" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${resizeBaseUrl}&size=twitter`} />

      <meta name="og:title" content={getTitle(title)} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`${resizeBaseUrl}&size=facebook`} />
    </Head>
  );
}
