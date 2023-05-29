import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="bg-sky-500 mb-3">
			<div className="container  flex justify-between">
				<div className="flex gap-2 py-2">
					<Link href="/">
						<a className="my-auto">
							<Image
								src="/logo.svg"
								alt="logo"
								width={45}
								height={45}
							/>
						</a>
					</Link>

					<div className="my-auto text-2xl font-semibold ">
						<Link href="/">
							<a className="my-auto">Connect 4</a>
						</Link>
					</div>
				</div>

				<div className="flex  my-auto gap-4">
					<div className="text-xl hover:underline">
						<Link href="/game">
							<a>Offline - 1 vs 1</a>
						</Link>
					</div>

					<div className="text-xl hover:underline">
						<Link href="/">
							<a>home</a>
						</Link>
					</div>

					<div className="text-xl hover:underline">
						<Link href="/">
							<a>home</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
