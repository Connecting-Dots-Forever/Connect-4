import Head from "next/head";

import Instructions from "components/game/Instructions";
import BoardViewWithPlayerContext from "components/game/Board";

export default function Game() {
	return (
		<>
			<Head>
				<title>Offline 1vs1</title>
			</Head>

			{/* <Instructions /> */}
			<BoardViewWithPlayerContext />
		</>
	);
}
