import Head from "next/head";
import PlayerPanel from "components/Player/PlayerPanel";
// import { useState } from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>Player Card Selection</title>
			</Head>

			<div className="container flex flex-col items-center mt-10">
				<div className="flex flex-col items-center justify-center">
					<h2 className="heading">Connect Four</h2>
					<p className="text-center text-gray-600 text-base">
						Play Connect 4 with two players.
					</p>
				</div>

				{/* 2 player panel */}
				<div className="flex justify-center w-full lg:w-9/12">
					<PlayerPanel number={1} color="#FF6900" />
					<PlayerPanel number={2} color="#00D084" />
				</div>

				<div className="mt-10">NOTE: connection not done yet</div>
			</div>
		</>
	);
};

export default Home;
