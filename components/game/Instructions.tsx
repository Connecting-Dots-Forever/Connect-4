export default function Instructions() {
	return (
		<div className="container mb-6">
			<div className="text-3xl font-bold mb-1">Instructions</div>
			<div className="text-md">
				<ul>
					<li>
						1. Point the cursor over the row you wish to drop your
						piece in.
					</li>
					<li>2. Left click to drop your piece</li>
					<li>
						3. When you can connect four pieces vertically,
						horizontally or diagonally you win
					</li>
				</ul>
			</div>
		</div>
	);
}
