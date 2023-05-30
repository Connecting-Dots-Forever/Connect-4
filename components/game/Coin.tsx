interface CoinProps {
	// key: string;

	onMouseOver: () => void;
	onClick: () => void;

	turn: number;
	type: "in-side" | "out-side";
}

export default function Disk({
	turn,
	type,

	onMouseOver,
	onClick,
}: CoinProps) {
	return (
		<div
			className={
				"hover:cursor-pointer  border-4  rounded-full " +
				(type === "in-side" ? " border-black" : "border-transparent") +
				(turn
					? turn === 1
						? " bg-amber-500"
						: " bg-rose-500"
					: " bg-white")
			}
			onMouseOver={type === "in-side" ? onMouseOver : () => {}}
			onClick={type === "in-side" ? onClick : () => {}}
		></div>
	);
}
