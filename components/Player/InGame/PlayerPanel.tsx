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
    //  style={{ 'backgroundColor': player.coinColor }}
    <div className="bg-white shadow rounded p-4 text-black backdrop-blur-md">
      <div className="flex justify-center items-center">
        <div dangerouslySetInnerHTML={{ __html: player.avatar }} className="rounded-full" style={{ 'backgroundColor': player.coinColor }}></div>
      </div>
      <div className="flex justify-evenly items-center mt-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>
        <div>{player.name}</div>
      </div>
    </div>
  );
};

export default PlayerPanel;
