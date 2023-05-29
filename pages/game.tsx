import Head from "next/head";

import Board from "components/game/Board";
import Instructions from "components/game/Instructions";

export default function Game() {
	return (
		<>
			{/* <div className="text-4xl font-bold text-center my-7">Connect 4</div> */}
			<Head>
				<title>C4 - Offline - 1 vs 1</title>
			</Head>

			<Instructions />
			<Board />
		</>
	);
}
