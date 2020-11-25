import Headline from "../../Headline";
import Paragraph from "../../Paragraph";

import styles from "./Author.module.css";

const Author = ({ title, content }) => (
  <div>
    <Headline tag={3} as={2} className={styles.name}>
      {title}
    </Headline>

    <Paragraph className={styles.description}>{content}</Paragraph>
  </div>
);

export default Author;
