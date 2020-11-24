import Headline from "../../Headline";

import styles from "./Author.module.css";

const Author = ({ title, biography }) => (
  <div>
    <Headline tag={3} as={2} className={styles.name}>
      {title}
    </Headline>

    {biography}
  </div>
);

export default Author;
