import React, { useEffect } from "react";

import Image from "next/image";
import { getPlayerAvatar } from "utils/PlayerAvatars";

type Props = {};

type Player = {
  name: string;
  coinColor: string;
  avatar: string;
};

const PlayerPanel = (props: Props) => {
  const [player, setPlayer] = React.useState({
    name: "",
    coinColor: "",
    avatar: "",
  });

  useEffect(() => {
    getPlayerAvatar("Raghav").then((res) => {
      setPlayer({
        name: "Raghav",
        coinColor: "#FF6900",
        avatar: res,
      });
    });
  }, []);

  return (
    <div className="bg-white shadow h-60 w-60 rounded p-4">
      <div className="flex justify-center items-center">
        <div dangerouslySetInnerHTML={{ __html: player.avatar }}></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className={`w-5 h-5 rounded-full mr-2 shadow-md shadow-[${player.coinColor}]`}
          style={{ backgroundColor: player.coinColor }}
        ></div>
        <div>{player.name}</div>
      </div>
    </div>
  );
};

export default PlayerPanel;
