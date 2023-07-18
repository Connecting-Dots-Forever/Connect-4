import React, { useEffect } from "react";
import { getPlayerAvatar } from "utils/PlayerAvatars";

type Props = { player: { name: string, coinColor: string } };

const PlayerPanel = (props: Props) => {
  const [avatar, setAvatar] = React.useState("");

  useEffect(() => {
    if(props.player.name === "random") return;
    async function updatePlayer() {
      const res = await getPlayerAvatar(props.player.name);
      setAvatar(res);
    }
    updatePlayer();
  }, [props.player.name, props.player.coinColor]);

  return (
    <div className="bg-white shadow rounded p-4 text-black backdrop-blur-md">
      <div className="flex justify-center items-center">
        <div dangerouslySetInnerHTML={{ __html: avatar }} className="rounded-full" style={{ 'backgroundColor': props.player.coinColor }}></div>
      </div>
      <div className="flex justify-evenly items-center mt-2">

        {/* player name */}
        <div>{props.player.name}</div>
      </div>
    </div>
  );
};

export default PlayerPanel;
