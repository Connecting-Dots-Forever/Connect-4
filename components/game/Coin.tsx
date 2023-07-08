interface CoinProps {
	// key: string;

	onMouseOver: () => void;
	onClick: () => void;

	turn: number;
	type: "in-side" | "out-side";
	coinColorA: string;
	coinColorB: string;
}

export default function Disk({
	turn,
	type,
	coinColorA,
	coinColorB,
	onMouseOver,
	onClick,
}: CoinProps) {
	return (
		<div
			className={
				"hover:cursor-pointer  border-4  rounded-full " +
				(type === "in-side" ? " border-black" : "border-transparent")
			}
			style={{"backgroundColor": (turn ? (turn === 1 ? coinColorA : coinColorB) : "#FFFFFF")}}
			onMouseOver={type === "in-side" ? onMouseOver : () => {}}
			onClick={type === "in-side" ? onClick : () => {}}
		></div>
	);
}
