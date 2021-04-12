import { memo } from "react";

import "../public/styles/variables.css";

import { Provider as PlayerProvider } from "../store/player";
import Player from "../components/Player";

import "../public/styles/fonts.css";
import "../public/styles/global.css";

const MemoizedPlayer = memo(Player);

const App = ({ Component, pageProps }) => {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
      <MemoizedPlayer />
    </PlayerProvider>
  );
};

export default App;
