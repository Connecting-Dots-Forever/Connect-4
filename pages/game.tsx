import { log } from "console";
import React, { useEffect, useState } from "react";
import Board from "components/Board";
import Instructions from "components/Instructions";

function Game() {
	return (
		<>
			<div className="text-4xl font-bold text-center my-7">Connect 4</div>
			<Instructions />
			<Board />
		</>
	);
}

export default Game;
