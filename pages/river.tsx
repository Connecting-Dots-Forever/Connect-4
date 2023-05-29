import Head from "next/head";
import { Board } from "../lib/logic"

const River = () => {

	let obj = new Board("A");

	obj.is_winning(1);
	obj.is_winning(4);
	obj.is_winning(4);
	obj.is_winning(2);
	obj.is_winning(6);

	return (
		<>
			<Head>
				<title>River testing</title>
			</Head>

			<div className="my-5 md:my-20 text-center">
				inspect =={">"} console panel
				<br />
				to see the result
				<br />
				short cut: ctrl + shift + i
			</div>
		</>
	);
};

export default River;
