import FollowList from "../FollowList";
import Headline from "../Headline";
import Paragraph from "../Paragraph";
import Stack from "../Stack";

import styles from "./About.module.css";

const About = ({ title, description, social_media }) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.contentContainer}>
          <Headline level={2}>{title}</Headline>
          <Paragraph className={styles.description}>{description}</Paragraph>

          <Stack direction="horizontal" gap="tiny" center>
            <Paragraph className={styles.followLabel}>
              Podcast abonnieren
            </Paragraph>
            <FollowList
              theme="brand"
              items={social_media.map((item) => [
                item.type,
                item.url,
                item.type,
              ])}
            />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default About;
