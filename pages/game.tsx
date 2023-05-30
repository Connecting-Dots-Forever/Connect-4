import Head from "next/head";

import Instructions from "components/game/Instructions";
import Board from "components/game/Board";

export default function Game() {
	return (
		<>
			{/* <div className="text-4xl font-bold text-center my-7">Connect 4</div> */}
			<Head>
				<title>C4 - Offline - 1 vs 1</title>
			</Head>

			<Instructions />
			<Board first_turn={1} row={6} col={7} dots={4} />
		</>
	);
}
