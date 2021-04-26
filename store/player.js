import { createContext, useContext, useEffect, useState } from "react";

const PlayerContext = createContext({});

export const Provider = ({ children }) => {
  const { Provider: PlayerProvider } = PlayerContext;

  const [playState, setPlayState] = useState(null);
  const [timing, setTiming] = useState(0);
  const [episode, setEpisode] = useState({});
  const [apiLoaded, setApiLoaded] = useState(false);

  return (
    <PlayerProvider
      value={{
        episode,
        timing,
        playState,
        apiLoaded,
        setEpisode,
        setTiming,
        setPlayState,
        setApiLoaded
      }}
    >
      {children}
    </PlayerProvider>
  );
};

export default PlayerContext;

export const usePlayer = () => useContext(PlayerContext);
