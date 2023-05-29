interface CoinProps {
	// key: string;

	onMouseOver: () => void;
	onClick: () => void;

	cell: number;
	type: "in-side" | "out-side";
}

export default function Disk({
	cell,
	type,

	onMouseOver,
	onClick,
}: CoinProps) {
	return (
		<div
			className={
				"hover:cursor-pointer  border-4  rounded-full " +
				(type === "in-side" ? " border-black" : "border-white")
			}
			style={{
				backgroundColor: cell
					? cell === 1
						? "red"
						: "yellow"
					: "white",
			}}
			onMouseOver={onMouseOver}
			onClick={onClick}
		></div>
	);
}
