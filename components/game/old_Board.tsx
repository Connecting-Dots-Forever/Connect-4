import { useState } from "react";

import styles from "styles/Game.module.css";

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

	const bgOnTop = (e: any) => {
		const col = e.target.id.charAt(2);
		let newTop = [0, 0, 0, 0, 0, 0, 0];
		newTop[parseInt(col)] = 1;
		setHoverTop(newTop);
	};

	const placeDisk = (e: any) => {
		// console.log(parseInt(e.target.id.charAt(2)), "place");

		let i,
			col = parseInt(e.target.id.charAt(2));
		for (i = 0; i < ds.length; i++) {
			if (ds[i][col] !== 0) break;
		}

		if (i > 0) {
			ds[--i][col] = turn;
			setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
		}
	};

	return (
		<div className="flex justify-center items-end">
			<div className="mt-5">
				<div className={`${styles.grTop} mb-4`}>
					{hoverTop.map((col, i) => (
						<div
							className={`border-4 border-white rounded-full`}
							key={i}
							style={{
								backgroundColor: hoverTop[i]
									? turn === 1
										? "red"
										: "yellow"
									: "white",
							}}
							onMouseOver={bgOnTop}
							onClick={placeDisk}
							id={`t-${i}`}
						></div>
					))}
				</div>

				<div className={`${styles.gr} bg-black p-2`}>
					{ds.map((row, x) => {
						return row.map((cell, y) => {
							return (
								<div
									className={
										"border-4 border-black rounded-full "
									}
									//  + ds[x][y]
									//   ? ds[x][y] === 1
									//     ? "bg-red-500"
									//     : "bg-yellow-500"
									//   : "bg-white"}
									style={{
										backgroundColor: ds[x][y]
											? ds[x][y] === 1
												? "red"
												: "yellow"
											: "white",
									}}
									onMouseOver={bgOnTop}
									onClick={placeDisk}
									id={`${x}-${y}`}
									key={`${x}-${y}`}
								></div>
							);
						});
					})}
				</div>
			</div>
		</div>
	);
}

export default Board;