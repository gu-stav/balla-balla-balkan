import FollowListItem from "./FollowListItem";
import Stack from "../Stack";

import styles from "./FollowList.module.css";

const FollowList = ({ items = [], theme = "dark" }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Stack
      direction="horizontal"
      gap="tiny"
      tagName={"ul"}
      className={styles.list}
    >
      {items.map(([type, href]) => (
        <li>
          <FollowListItem type={type} href={href} label={type} theme={theme} />
        </li>
      ))}
    </Stack>
  );
};

export default FollowList;
