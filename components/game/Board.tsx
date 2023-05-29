import { useState } from "react";

// import styles from "styles/Game.module.css";
import Coin from "./Coin";
import Triangle from "./Triangle";

export default function BoardView() {
	const [turn, setTurn] = useState(1); //1-for player 1, 2 for player 2
	const [board, setBoard] = useState([
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
		newTop[col_num] = turn;
		setHoverTop(newTop);
	};

	const placeCoin = (col_num: number) => {
		let i;
		for (i = 0; i < board.length; i++) {
			if (board[i][col_num] !== 0) break;
		}

		if (i > 0) {
			board[--i][col_num] = turn;
			setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
		}
	};

	return (
		<div className="flex justify-center items-end">
			<div>
				{/* current turn */}
				<div className="flex my-10">
					<div className="text-xl my-auto mr-5">
						{/* Current turn: Player -{">"} {turn} */}
						Current :
					</div>
					<span
						className={"grid"}
						style={{
							gridTemplateRows: "repeat(1, 40px)",
							gridTemplateColumns: "repeat(1, 40px)",
						}}
					>
						<Coin
							turn={turn}
							type={"out-side"}
							onMouseOver={function () {}}
							onClick={function () {}}
						/>
					</span>
				</div>

				{/* upper coin to place in board */}
				{/* not working properly : color not getting updated */}
				{/* that's y using triangle */}
				<div
					className={"grid justify-center mb-4"}
					style={{
						gridTemplateRows: "repeat(1, 70px)",
						gridTemplateColumns: "repeat(7, 70px)",
					}}
				>
					{hoverTop.map((col_val, index) => (
						// <Coin
						// 	key={`in-${index}`}
						// 	turn={col_val}
						// 	type="out-side"
						// 	onMouseOver={() => bgOnTop(index)}
						// 	onClick={() => placeCoin(index)}
						// />
						<Triangle
							key={index}
							turn={col_val}
							type="out-side"
							onMouseOver={() => bgOnTop(index)}
							onClick={() => placeCoin(index)}
						/>
					))}
				</div>

				{/* board to play game */}
				<div
					className={"grid justify-center bg-black p-2"}
					style={{
						gridTemplateRows: "repeat(6, 70px)",
						gridTemplateColumns: "repeat(7, 70px)",
					}}
				>
					{board.map((row, x_index) =>
						row.map((cell_value, y_index) => (
							<Coin
								key={`in-${x_index}-${y_index}`}
								turn={cell_value}
								type="in-side"
								onMouseOver={() => bgOnTop(y_index)}
								onClick={() => placeCoin(y_index)}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
