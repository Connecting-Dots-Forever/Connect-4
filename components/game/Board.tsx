import { useState } from "react";

import styles from "styles/Game.module.css";
import Coin from "./Coin";

function Board() {
	const [turn, setTurn] = useState(1); //1-for player 1, 2 for player 2
	const [ds, setDs] = useState([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 2, 0],
		[0, 0, 0, 1, 0, 1, 2],
	]);

	const [hoverTop, setHoverTop] = useState([0, 0, 0, 0, 0, 0, 0]);

	const bgOnTop = (col_num: number) => {
		let newTop = [0, 0, 0, 0, 0, 0, 0];
		newTop[col_num] = 1;
		setHoverTop(newTop);
	};

	const placeCoin = (col_num: number) => {
		// console.log(parseInt(e.target.id.charAt(2)), "place");

		let i;
		for (i = 0; i < ds.length; i++) {
			if (ds[i][col_num] !== 0) break;
		}

		if (i > 0) {
			ds[--i][col_num] = turn;
			setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
		}
	};

	return (
		<div className="flex justify-center items-end">
			<div className="mt-5">
				<div className={`${styles.grTop} mb-4`}>
					{hoverTop.map((col, i) => (
						<Coin
							key={`in-${i}`}
							cell={col}
							type="out-side"
							onMouseOver={() => bgOnTop(i)}
							onClick={() => placeCoin(i)}
						/>
					))}
				</div>

				<div className={`${styles.gr} bg-black p-2`}>
					{ds.map((row, x) =>
						row.map((cell, y) => (
							<Coin
								key={`in-${x}-${y}`}
								cell={cell}
								type="in-side"
								onMouseOver={() => bgOnTop(y)}
								onClick={() => placeCoin(y)}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default Board;
