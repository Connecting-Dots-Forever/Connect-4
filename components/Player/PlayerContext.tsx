import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import localStore from "utils/PlayerData";
import { getRandomUsername } from "utils/FakeUsername";

interface Player {
    name: string;
    coinColor: string;
}

interface IPlayerContext {
  getPlayer: (type: string) => Player;
  setPlayer: (type: string, player: Player) => void;
}

export const PlayerContext = createContext<IPlayerContext>({
    getPlayer: () => {
        return {
            name: "",
            coinColor: "",
        };
    },
    setPlayer: () => {},
});

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playerA, setPlayerA] = useState<Player>(initializePlayer("A"));

    const [playerB, setPlayerB] = useState<Player>(initializePlayer("B"));

    function initializePlayer(type: string) {
        if(type === "A") {
            const player = localStore.getPlayerData("A");
            if(player) {
                return player;
            }
            else {
                const name = getRandomUsername()?.toString() || "random";
                const coinColor = localStore.PLAYERA_COLOR;
                localStore.setPlayerData("A", {name, coinColor});
                return {name, coinColor};
            }
        }
        else {
            const player = localStore.getPlayerData("B");
            if(player) {
                return player;
            }
            else {
                const name = getRandomUsername()?.toString() || "random";
                const coinColor = localStore.PLAYERB_COLOR;
                localStore.setPlayerData("B", {name, coinColor});
                return {name, coinColor};
            }
        }
    }

    const getPlayer = (type: string) => {
        if(type === "A")
            return playerA;
        else if(type === "B")
            return playerB;
        else
            return {} as Player;
    }

    const setPlayer = (type: string, player: Player) => {
        if(type === "A") {
            setPlayerA(player);
            localStore.setPlayerData("A", player);
        }
        else if(type === "B") {
            setPlayerB(player);
            localStore.setPlayerData("B", player);
        }
    }

    return (
        <PlayerContext.Provider value={{ getPlayer, setPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerProvider;