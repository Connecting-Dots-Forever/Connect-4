// Path: utils\PlayerContext.ts

import { ReactNode, createContext, useState } from "react";
import { getPlayerData } from "utils/PlayerData";

interface IPlayer {
    name: string;
    profile: string;
    coinColor: string;
}

interface IPlayerContext {
    playerA: IPlayer;
    setPlayerA: React.Dispatch<React.SetStateAction<IPlayer>>;
    playerB: IPlayer;
    setPlayerB: React.Dispatch<React.SetStateAction<IPlayer>>;
}

const PlayerContext = createContext<IPlayerContext | null>(null);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playerA, setPlayerA] = useState<IPlayer>(getPlayerData("playerA"));
    const [playerB, setPlayerB] = useState<IPlayer>(getPlayerData("playerB"));

    return (
        <PlayerContext.Provider value={{ playerA, setPlayerA, playerB, setPlayerB }}>
            {children}
        </PlayerContext.Provider>
    )
};

export default PlayerContext;