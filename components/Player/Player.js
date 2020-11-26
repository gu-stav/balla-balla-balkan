import { Slider } from "@reach/slider";
import Image from "next/image";

import { usePlayer } from "../../store/player";

import "@reach/slider/styles.css";
import styles from "./Player.module.css";

const Player = () => {
  const { episode, setEpisode } = usePlayer();

  if (Object.keys(episode).length === 0) {
    return null;
  }

  const { title, image, number, length } = episode;

  return (
    <div className={styles.player}>
      <div className={styles.inner}>
        <Image src={image} width={100} height={100} layout="fixed" />

        <strong className={styles.title}>
          <span className={styles.tagline}>Episode {number}</span>
          {title}
        </strong>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderInner}>
            <Slider />
          </div>
        </div>

        <div className={styles.lengthContainer}>{length}</div>

        <button
          type="button"
          className={styles.close}
          onClick={() => setEpisode({})}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className={styles.closeIcon}
          >
            <path
              fill="currentColor"
              d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Player;
