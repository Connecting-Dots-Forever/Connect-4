import Head from "next/head";
import PlayerPanel from "components/PlayerPanel"

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="container flex flex-col items-center mt-10 h-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading">Connect Four</h2>
          <p className="text-xl text-center text-gray-600">
            Play Connect 4 with two players.
          </p>
        </div>

        {/* 2 player panel */}
        <div className="flex justify-center w-full lg:w-9/12">
          <PlayerPanel number={1} />
          <PlayerPanel number={2} />
        </div>
      </div>
    </>
  );
};

export default Home;
