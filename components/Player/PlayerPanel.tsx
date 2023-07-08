import React, { useRef, useEffect, useState } from "react";
import { getPlayerAvatar } from "utils/PlayerAvatars";
import { getRandomUsername } from "utils/FakeUsername";
import ColorPicker from "components/ColorPicker/ColorPicker";
import { PlayerContext } from "./PlayerContext";

type Props = {
	playerAlphabet: string;
};

const PlayerPanel = (props: Props) => {
	const contextStore = React.useContext(PlayerContext);
	const [player, setPlayer] = useState(contextStore.getPlayer(props.playerAlphabet));
	const [profile, setProfile] = useState<string>("");
	const [toggleColorPicker, setToggleColorPicker] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const isInitialClick = useRef<boolean>(true);
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		contextStore.setPlayer(props.playerAlphabet, {
			name: player.name,
			coinColor: player.coinColor,
		});
	}, [player.name, player.coinColor]);

	useEffect(() => {
		getPlayerAvatar(player.name)
			.then((avatar) => {
				setProfile(avatar);
			})
			.catch((err) => {
				console.log(err);
			});

		return () => {
			if (typingTimeout) {
				clearTimeout(typingTimeout);
			}
		};
	}, []);

	// when user will click on input having randomly generated text it will select whole text
	const handleInputClick = () => {
		if (isInitialClick.current) {
			inputRef.current?.select();
			isInitialClick.current = false;
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPlayer(prevPlayer => ({...prevPlayer, name: value}));

		if (typingTimeout) clearTimeout(typingTimeout);

		const newTypingTimeout = setTimeout(() => {
			getPlayerAvatar(value)
				.then((avatar) => {
					setProfile(avatar);
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1000);

		setTypingTimeout(newTypingTimeout);
	};

	return (
		<div
			className={`flex flex-wrap justify-center flex-col rounded mt-5 bg-white p-3 w-2/3 sm:w-3/5 basis-1/2 ${
				props.playerAlphabet === "A" && `mr-3`
			} mb-2`}
		>
			{/* username */}
			<label
				htmlFor={`player${props.playerAlphabet}`}
				className="text-xs mb-1 pl-1"
			>
				Player Name
			</label>
			<input
				type="text"
				value={player.name}
				onChange={handleInputChange}
				className="border-gray-200 border-2 w-full px-3 py-3 mb-3 focus-visible:outline-none focus:border-zinc-800 rounded"
				name={`player${props.playerAlphabet}`}
				id={`player${props.playerAlphabet}`}
				placeholder={`Enter Name`}
				onClick={handleInputClick}
				ref={inputRef}
			/>

			<div className="w-full mb-4">
				{profile === "" ? (
					<div className="rounded bg-neutral-300 w-full h-28 animate-pulse"></div>
				) : (
					<div>
						<div className="flex justify-start">
							<p className="text-xs mb-1">
								Your avatar based on Name
							</p>
						</div>
						<div
							className="flex justify-center items-center"
							dangerouslySetInnerHTML={{ __html: profile }}
						/>
					</div>
				)}
			</div>

			<div className="mb-3 px-2">
				<p className="text-xs mb-1">Choose your coin color</p>
				<div className="flex justify-start flex-col">
					<div
						className="border-gray-200 rounded border-2 p-1 w-14 h-10 cursor-pointer flex justify-center items-center focus:border-zinc-800"
						onClick={() => setToggleColorPicker((prev) => !prev)}
					>
						<div
							style={{ backgroundColor: player.coinColor }}
							className="w-full h-full rounded"
						></div>
					</div>
					{toggleColorPicker && (
						<div className="w-full">
							<ColorPicker
								color={player.coinColor}
								setPlayer={setPlayer}
								setToggleColorPicker={setToggleColorPicker}
							/>
						</div>
					)}
				</div>
			</div>

			{/* <button
				type="button"
				className="bg-zinc-800 text-white py-3 text-center border-gray-400 rounded"
			>
				Ready
			</button> */}
		</div>
	);
};

export default PlayerPanel;
