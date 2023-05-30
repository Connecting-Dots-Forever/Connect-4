import { Component } from "react";

// import styles from "styles/Game.module.css";
import Coin from "./Coin";
import Triangle from "./Triangle";

type player = 1 | 2;
type blank_type = 0;
type matrix_type = 0 | 1 | 2;

let blank: blank_type = 0;

type MyProps = {
	first_turn: player;
	row: number;
	col: number;
	dots: number;
};

type MyState = {
	matrix: matrix_type[][];
	current_turn: player;
	hoverTop: matrix_type[];
	is_won: boolean;
	message: string;
};

class BoardView extends Component<MyProps, MyState> {
	// private row = 6;
	// private col = 7;
	// private dots = 4;

	constructor(props: MyProps) {
		super(props);

		this.state = {
			current_turn: this.props.first_turn,
			matrix: Array.from(Array(this.props.row), () =>
				new Array(this.props.col).fill(blank)
			),
			hoverTop: [0, 0, 0, 0, 0, 0, 0],
			is_won: false,
			message: "",
		};
	}

	// ui related
	bgOnTop(col_num: number): void {
		let newTop: matrix_type[] = [0, 0, 0, 0, 0, 0, 0];
		newTop[col_num] = this.state.current_turn;
		this.setState({ hoverTop: newTop });
	}

	direction_count(
		x: number,
		y: number,
		dir_x: number,
		dir_y: number
	): number {
		let count = 0;

		do {
			x += dir_x;
			y += dir_y;

			if (
				x >= 0 &&
				x < this.props.row &&
				y >= 0 &&
				y < this.props.col &&
				this.state.matrix[x][y] == this.state.current_turn
			) {
				count++;
			} else {
				break;
			}
		} while (true);

		return count;
	}

	// logic
	placeCoin(col_num: number): number {
		// return row index where it fit
		// if (col_num >= this.state.col || col_num < 0) {
		// 	console.log(
		// 		`ERROR: no such colum exist range is from ${0} to ${
		// 			this.state.col - 1
		// 		}`
		// 	);
		// 	return -1;
		// }

		// let i: number = -1;
		for (let i = this.props.row - 1; i >= 0; i--) {
			if (this.state.matrix[i][col_num] === blank) {
				let new_matrix = this.state.matrix;
				new_matrix[i][col_num] = this.state.current_turn;
				this.setState({ matrix: new_matrix });

				this.change_turn();
				return i;
			}
		}

		// if (i == -1) {
		console.log(`==> but column ${col_num} is already full \n`);
		return -1;
		// }
	}

	// c: colum number
	is_winning(c: number): boolean | undefined {
		if (this.state.is_won) {
			// console.log("==> All ready WON\n");
			return;
		}

		let r = this.placeCoin(c);
		if (r === -1) return false;

		// vertically: down ... up not possible
		let down = this.direction_count(r, c, 1, 0);
		if (down + 1 >= this.props.dots) {
			this.setState({
				is_won: true,
				message:
					"Player-" + this.state.current_turn + " WON: vertically",
			});
			return true;
		}

		// horizontally: left, right
		let left = this.direction_count(r, c, 0, -1),
			right = this.direction_count(r, c, 0, 1);

		if (left + right + 1 >= this.props.dots) {
			this.setState({
				is_won: true,
				message:
					"Player-" + this.state.current_turn + " WON: horizontally",
			});

			return true;
		}

		// diagonal-1: top_left, bottom_right
		let top_left = this.direction_count(r, c, -1, -1),
			bottom_right = this.direction_count(r, c, 1, 1);

		if (top_left + bottom_right + 1 >= this.props.dots) {
			// console.log(
			// 	"--- WON: diagonally .. top_left to bottom_right --- \n"
			// );
			this.setState({
				is_won: true,
				message:
					"Player-" +
					this.state.current_turn +
					" WON: diagonally .. top_left to bottom_right ",
			});

			return true;
		}

		// diagonal-2: top_right, bottom_left
		let top_right = this.direction_count(r, c, -1, 1),
			bottom_left = this.direction_count(r, c, 1, -1);

		if (top_right + bottom_left + 1 >= this.props.dots) {
			// console.log(
			// 	"--- WON: diagonally .. top_right to bottom_left --- \n"
			// );
			this.setState({
				is_won: true,
				message:
					"Player-" +
					this.state.current_turn +
					" WON: diagonally .. top_right to bottom_left",
			});

			return true;
		}

		this.change_turn();
		this.is_tie();
		return false;
	}

	// placeCoin(col_num: number): void {
	// 	let i;
	// 	for (i = 0; i < this.row; i++) {
	// 		if (this.state.matrix[i][col_num] !== 0) break;
	// 	}
	// 	if (i > 0) {
	// 		let new_matrix = this.state.matrix;
	// 		new_matrix[--i][col_num] = this.state.current_turn;
	// 		this.setState({ matrix: new_matrix });

	// 		this.change_turn();
	// 	}
	// }

	private change_turn() {
		this.setState({
			current_turn: this.state.current_turn === 1 ? 2 : 1,
		});
	}

	protected is_tie(): boolean {
		for (const val of this.state.matrix[0]) {
			if (val === blank) {
				// can play coin
				return false;
			}
		}

		this.setState({ message: "TIE-TIE-TIE" });

		console.warn("TIE-TIE-TIE ... no one ... WIN / LOOSE");
		return true;
	}

	render() {
		return (
			<div className="flex flex-col justify-center">
				<div>
					{/* current turn */}
					<div className="flex mt-10 gap-1">
						<div
							className="btn "
							onClick={() =>
								this.setState({
									current_turn: this.props.first_turn,
									matrix: Array.from(
										Array(this.props.row),
										() =>
											new Array(this.props.col).fill(
												blank
											)
									),
									is_won: false,
									message: "",
								})
							}
						>
							restart
						</div>
						<div className="text-xl my-auto">
							{/* Current turn: Player -{">"} {turn} */}
							Current :
						</div>
						<div
							className={"grid"}
							style={{
								gridTemplateRows: "repeat(1, 40px)",
								gridTemplateColumns: "repeat(1, 40px)",
							}}
						>
							<Coin
								turn={this.state.current_turn}
								type={"out-side"}
								onMouseOver={function () {}}
								onClick={function () {}}
							/>
						</div>
					</div>

					<div className="text-xl my-5 text-center">
						{this.state.message}
					</div>
				</div>
				<div className="flex justify-center">
					<div
						style={{
							width: this.props.col * 70 + 10 + "px",
						}}
					>
						{/* upper coin to place in board */}
						{/* not working properly : color not getting updated */}
						{/* that's y using triangle */}
						<div
							className={"grid justify-center mb-4"}
							style={{
								gridTemplateRows: "repeat(1, 70px)",
								gridTemplateColumns: `repeat(${this.props.col}, 70px)`,
							}}
						>
							{this.state.hoverTop.map((col_val, index) => (
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
									onMouseOver={() => this.bgOnTop(index)}
									onClick={() => this.is_winning(index)}
								/>
							))}
						</div>
						{/* board to play game */}
						<div>
							<div
								className={"grid justify-center bg-black p-2"}
								style={{
									gridTemplateRows: `repeat(${this.props.row}, 70px)`,
									gridTemplateColumns: `repeat(${this.props.col}, 70px)`,
								}}
							>
								{this.state.matrix.map((row, x_index) =>
									row.map((cell_value, y_index) => (
										<Coin
											key={`in-${x_index}-${y_index}`}
											turn={cell_value}
											type="in-side"
											onMouseOver={() =>
												this.bgOnTop(y_index)
											}
											onClick={() =>
												this.is_winning(y_index)
											}
										/>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BoardView;
