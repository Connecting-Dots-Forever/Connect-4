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
			className={"hover:cursor-pointer "}
			onMouseOver={onMouseOver}
			onClick={onClick}
		>
			{turn == 0 ? (
				<div></div>
			) : (
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "30px solid transparent",
						borderRight: "30px solid transparent",
						borderTop: "50px solid black",
					}}
				></div>
			)}
		</div>
	);
}
