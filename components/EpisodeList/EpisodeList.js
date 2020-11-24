import EpisodeItem from "./EpisodeItem";
import Stack from "../Stack";

import styles from "./EpisodeList.module.css";

const EpisodeList = ({ episodes }) => (
  <Stack tagName="ul" className={styles.list}>
    {episodes.map((episode) => (
      <li>
        <EpisodeItem {...episode} />
      </li>
    ))}
  </Stack>
);

export default EpisodeList;
