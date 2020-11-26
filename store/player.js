import { createContext, useContext, useState } from "react";

const PlayerContext = createContext({});

export const Provider = ({ children }) => {
  const { Provider: PlayerProvider } = PlayerContext;

  const [episode, setEpisode] = useState({});

  return (
    <PlayerProvider
      value={{
        episode,
        setEpisode,
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
