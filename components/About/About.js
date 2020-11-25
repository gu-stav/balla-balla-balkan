import FollowList from '../FollowList';
import Headline from '../Headline';
import Paragraph from '../Paragraph';
import Stack from '../Stack';

import styles from './About.module.css';

const About = ({ title, description }) => <section className={styles.section}>
  <div className={styles.inner}>
    <div className={styles.contentContainer}>
      <Headline level={2}>{title}</Headline>
      <Paragraph className={styles.description}>{description}</Paragraph>

      <Stack direction="horizontal" gap="tiny" center>
        <Paragraph className={styles.followLabel}>Folge dem Podcast auf</Paragraph>
        <FollowList theme="brand" items={[
          ["apple", "https://apple.com", "Apple"],
          ["spotify", "https://spotify.com", "Spotify"],
          ["soundcloud", "https://soundcloud.com", "Soundcloud"],
        ]} />
      </Stack>
    </div>
  </div>
</section>

export default About;
