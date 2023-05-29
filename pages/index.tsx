import Head from "next/head";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<Head>
				<title>C4 - Home Page</title>
			</Head>

			<div className="container mt-5 ">
				<Link href="/game">
					<a type="button" className="btn">
						Offline - 1 vs 1
					</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
