import { AppProps } from "next/app";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

// import Tailwindbreakpoints from "components/Tailwindbreakpoints";
import Navbar from "components/Navbar";
import "styles/globals.css";
import PlayerProvider from "components/Player/PlayerContext";

const App = ({ Component, pageProps }: AppProps) => {
	return (
    <>
      {/* progress bar on change in router */}
      <NextNProgress
        color="#24292F"
        startPosition={0.0}
        stopDelayMs={0}
        height={2}
        showOnShallow={true}
      />

      {/* <Tailwindbreakpoints /> */}

      <Head>
        <title>Connect 4</title>
        <link rel="icon" href="/logo.png" />

        {/* meta tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <div className="-z-10 w-screen h-screen fixed">
        <div className="gradient"></div>
      </div>

      <PlayerProvider>
        <main id="main-content" className="container pt-10">
          <Component {...pageProps} />
        </main>
      </PlayerProvider>
    </>
  );
};

export default App;
