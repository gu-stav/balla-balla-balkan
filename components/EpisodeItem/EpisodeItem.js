import Link from "next/link";

const EpisodeItem = ({ title, slug, subtitle, excerpt, length, number }) => (
  <Link href={slug}>
    <a>
      {length}

      <h2>
        {number}
        {title}
        {subtitle && <span>{subtitle}</span>}
      </h2>

      <p>{excerpt}</p>
    </a>
  </Link>
);

export default EpisodeItem;
