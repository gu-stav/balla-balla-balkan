import { createContext, useContext, useEffect, useState } from "react";

const PlayerContext = createContext({});

export const Provider = ({ children }) => {
  const { Provider: PlayerProvider } = PlayerContext;

  const [playState, setPlayState] = useState(null);
  const [timing, setTiming] = useState(0);
  const [episode, setEpisode] = useState({});

  return (
    <PlayerProvider
      value={{
        episode,
        timing,
        playState,
        setEpisode,
        setTiming,
        setPlayState
      }}
    >
      {children}
    </PlayerProvider>
  );
};

export default PlayerContext;

export const usePlayer = () => {
  return useContext(PlayerContext);
};
