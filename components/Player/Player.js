import { useState, useEffect, useRef, memo } from "react";
import { Slider } from "@reach/slider";
import Image from "next/image";
import Script from "react-load-script";

import { usePlayer } from "../../store/player";

import "@reach/slider/styles.css";
import styles from "./Player.module.css";

const msToTime = (s) => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return `${`${hrs}`.padStart(2, "0")}:${`${mins}`.padStart(
    2,
    "0"
  )}:${`${secs}`.padStart(2, "0")}`;
};

const ControlContainer = memo(({ widget, playState }) => {
  return <div className={styles.controlButtonContainer}>
    <button
      type="button"
      className={styles.controlButton}
      onClick={() => {
        if (widget && playState === "play") {
          widget.pause();
        }

        if (widget && playState === "pause") {
          widget.play();
        }
      }}
    >
        {playState === "pause" && (
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.controlButtonIcon}
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
            ></path>
          </svg>
        )}

        {playState === "play" && (
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.controlButtonIcon}
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"
            ></path>
          </svg>
        )}
    </button>
  </div>;
})

const TitleContainer = memo(({ image, number, title }) => {
  return <>
    {image && (
      <Image src={image} width={100} height={100} layout="fixed" />
    )}

    <strong className={styles.title}>
      <span className={styles.tagline}>Episode {number}</span>
      {title}
    </strong>
  </>
});

const CloseButton = memo(({ onClick = () => {}}) => {
  return <button
    type="button"
    className={styles.close}
    onClick={() => onClick()}
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
});

const Player = () => {
  const {
    episode,
    setEpisode,
    timing,
    setTiming,
    playState,
    setPlayState,
  } = usePlayer();

  const { title, image, number, length, soundcloud_link } = episode;

  const [actualDuration, setActualDuration] = useState(0);
  const [widget, setWidget] = useState(null);
  const [soundcloudReady, setSoundcloudReady] = useState(false);
  const iframeRef = useRef(null);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (iframeRef?.current && apiLoaded) {
      const widget = window.SC.Widget(iframeRef.current);

      setWidget(widget);
    }
  }, [iframeRef, apiLoaded]);

  useEffect(() => {
    if (!widget) {
      return;
    }

    widget.bind(window.SC.Widget.Events.READY, () => {
      setSoundcloudReady(true);

      if (timing > 0) {
        widget.seekTo(timing);
      }

      widget.getDuration((duration) => setActualDuration(duration));

      if (playState === null || playState === "play") {
        widget.play();
      }

      widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, () => {
        widget.getPosition((position) => setTiming(position));
      });

      widget.bind(window.SC.Widget.Events.PAUSE, () => {
        setPlayState("pause");
      });

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        setPlayState("play");
      });
    });
  }, [widget]);

  if (Object.keys(episode).length === 0) {
    return null;
  }

  return (
    <>
      <Script
        url="https://w.soundcloud.com/player/api.js"
        onLoad={() => setApiLoaded(true)}
      />

      <iframe
        ref={iframeRef}
        className={styles.iframe}
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${soundcloud_link}`}
      />

      <div className={styles.player}>
        <div className={styles.inner}>
          <TitleContainer image={image} title={title} number={number} />

          {soundcloudReady ? (
            <ControlContainer widget={widget} playState={playState} />
          ) : (
            <>{"Lade Episode ..."}</>
          )}

          <div className={styles.sliderContainer}>
            <div className={styles.sliderInner}>
              <Slider
                min={0}
                value={timing}
                max={actualDuration}
                disabled={!soundcloudReady}
                onChange={(value) => widget.seekTo(value)}
              />
            </div>
          </div>

          <div className={styles.lengthContainer}>
            {soundcloudReady && (
              <>
                {msToTime(timing)}/{msToTime(actualDuration)}
              </>
            )}
          </div>

          <CloseButton onClick={() => setEpisode({})} />
        </div>
      </div>
    </>
  );
};

export default Player;
