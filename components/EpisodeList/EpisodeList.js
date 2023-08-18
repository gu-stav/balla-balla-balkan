import Link from 'next/link';

import EpisodeItem from "./EpisodeItem";
import Stack from "../Stack";

import styles from "./EpisodeList.module.css";

const EpisodeList = ({ episodes, moreLabel, moreHref }) => (
  <>
    <Stack tagName="ul" className={styles.list}>
      {episodes.map((episode) => (
        <li key={`episode-${episode.number}`}>
          <EpisodeItem {...episode} />
        </li>
      ))}
    </Stack>

    {moreLabel && moreHref && (
      <div className={styles.moreContainer}>
        <Link href={moreHref} className={styles.more}>

          {moreLabel}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 38" width="80" height="38">
            <path fill="currentColor" d="M78.8 20.8c1-1 1-2.6 0-3.6l-16-15.9A2.5 2.5 0 0059.4 5L73.5 19 59.3 33.1a2.5 2.5 0 003.6 3.6l15.9-16zM0 21.5h77v-5H0v5z"/>
          </svg>

        </Link>
      </div>
    )}
  </>
);

export default EpisodeList;
