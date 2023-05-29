// let matrix = Array.from(Array(row), () => new Array(col).fill(null));

type player = "A" | "B";
type blank_type = ".";

let blank = ".";

class Board {
	protected row = 6;
	protected col = 7;
	protected dots = 4;

	private is_won = false;

	private matrix: (player | blank_type)[][];
	private first_turn: player;
	private current_turn: player;

	constructor(first_turn: player) {
		this.first_turn = first_turn;
		this.current_turn = first_turn;

		this.matrix = Array.from(Array(this.row), () =>
			new Array(this.col).fill(blank)
		);

		// // testing purpose
		// this.matrix = [
		// 	[".", "A", ".", ".", ".", ".", "."],
		// 	[".", "A", ".", ".", ".", ".", "."],
		// 	[".", "B", "B", "A", ".", "A", "."],
		// 	["A", "A", "A", "B", ".", "B", "."],
		// 	["A", "B", "B", "B", "A", "A", "B"],
		// 	["A", "A", "A", "B", "A", "B", "B"],
		// ];

		// this.put_coin(0);
		// this.put_coin(0);
		// this.put_coin(1);
		// this.put_coin(2);

		// console.log(this.matrix);
		console.log(`==> initial matrix`);
		this.print_matrix();
	}

	public print_matrix() {
		for (const line of this.matrix) {
			let row_print = "";
			for (const val of line) {
				row_print += val + " ";
			}
			console.log(row_print);
		}
		console.log();
	}

	private change_turn() {
		this.current_turn = this.current_turn === "A" ? "B" : "A";
	}

	// ie. if matrix fully filled
	protected is_tie(): boolean {
		for (const val of this.matrix[0]) {
			if (val === blank) {
				// can play coin
				return false;
			}
		}

		console.warn("TIE-TIE-TIE ... no one ... WIN / LOOSE");
		return true;
	}

	protected put_coin(c: number): number {
		if (c >= this.col || c < 0) {
			console.log(
				`ERROR: no such colum exist range is from ${0} to ${
					this.col - 1
				}`
			);
			return -1;
		}

		for (let i = this.row - 1; i >= 0; i--) {
			if (this.matrix[i][c] === blank) {
				this.matrix[i][c] = this.current_turn;
				console.log(
					`==> ""${this.current_turn}"" : in col ${c} .. ie: row ${i}`
				);
				this.print_matrix();
				return i;
			}
		}

		console.log(`==> but column ${c} is already full \n`);

		return -1;
	}

	private direction_count(
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
				x < this.row &&
				y >= 0 &&
				y < this.col &&
				this.matrix[x][y] == this.current_turn
			) {
				count++;
			} else {
				break;
			}
		} while (true);

		return count;
	}

	public is_winning(c: number): boolean | undefined {
		if (this.is_won) {
			console.log("==> All ready WON\n");
			return;
		}

		let r = this.put_coin(c);
		if (r === -1) return false;

		// horizontal: down ... up not possible
		let down = this.direction_count(r, c, 1, 0);
		if (down + 1 >= this.dots) {
			console.log("--- WON: horizontally --- \n");
			this.is_won = true;
			return true;
		}

		// vertical: left, right
		let left = this.direction_count(r, c, 0, -1),
			right = this.direction_count(r, c, 0, 1);

		if (left + right + 1 >= this.dots) {
			console.log("--- WON: vertically --- \n");
			this.is_won = true;
			return true;
		}

		// diagonal-1: top_left, bottom_right
		let top_left = this.direction_count(r, c, -1, -1),
			bottom_right = this.direction_count(r, c, 1, 1);

		if (top_left + bottom_right + 1 >= this.dots) {
			console.log(
				"--- WON: diagonally .. top_left to bottom_right --- \n"
			);
			this.is_won = true;
			return true;
		}

		// diagonal-2: top_right, bottom_left
		let top_right = this.direction_count(r, c, -1, 1),
			bottom_left = this.direction_count(r, c, 1, -1);

		if (top_right + bottom_left + 1 >= this.dots) {
			console.log(
				"--- WON: diagonally .. top_right to bottom_left --- \n"
			);
			this.is_won = true;
			return true;
		}

		this.change_turn();

		this.is_tie();
		return false;
	}
}

// // testing
// let obj = new board("A");

// obj.is_winning(1);
// obj.is_winning(4);
// obj.is_winning(4);
// obj.is_winning(2);
// obj.is_winning(6);

export default Board;
