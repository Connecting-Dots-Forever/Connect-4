import Head from "next/head";

import Instructions from "components/game/Instructions";
import Board from "components/game/Board";
import { PlayerContext } from "components/Player/PlayerContext";
import BoardViewWithPlayerContext from "components/game/Board";

export default function Game() {
	return (
		<>
			{/* <div className="text-4xl font-bold text-center my-7">Connect 4</div> */}
			<Head>
				<title>C4 - Offline - 1 vs 1</title>
			</Head>

			{/* <Instructions /> */}
			<BoardViewWithPlayerContext />
			<div className="mb-20"></div>
		</>
	);
}
