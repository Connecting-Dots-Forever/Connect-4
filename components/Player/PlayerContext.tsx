import { ReactNode, createContext, useState } from "react";
import localStore from "utils/PlayerData";
import { getRandomPlayer } from "utils/DummyPlayer";

interface Player {
    name: string;
    coinColor: string;
}

interface IPlayerContext {
  getPlayer: (type: string) => Player;
  setPlayer: (type: string, player: Player) => boolean;
  tempAssignPlayer: (type: string) => Player;
}

export const PlayerContext = createContext<IPlayerContext>({
    getPlayer: (type: string) => {
        return {
            name: "",
            coinColor: "",
        };
    },
    setPlayer: (type: string, player: Player) => false,
    tempAssignPlayer(type) {
        return {
            name: "",
            coinColor: "",
        };
    },
});

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playerA, setPlayerA] = useState<Player>(getRandomPlayer("A"));
    const [playerB, setPlayerB] = useState<Player>(getRandomPlayer("B"));

    // return player data from local storage if exists, otherwise return random player data
    const getPlayer = (type: string) => {
        const storedPlayer = localStore.getPlayerData(type);
        if(storedPlayer) {
            if(type === "A") setPlayerA(storedPlayer);
            else setPlayerB(storedPlayer);

            return storedPlayer;
        }
        else {
            if(type === "A") localStore.setPlayerData(type, playerA);
            else localStore.setPlayerData(type, playerB);

            return type === "A" ? playerA : playerB;
        }
    }

    // set player data in local storage and context store
    const setPlayer = (type: string, player: Player) => {
        if(type === "A") {
            setPlayerA(player);
        }
        else if(type === "B") {
            setPlayerB(player);
        }
        else return false;

        if(!localStore.setPlayerData(type, player)) return false;
        return true;
    }

    // for temporary assignment of player data during server side rendering
    const tempAssignPlayer = (type: string) => {
        if(type === "A") {
            return playerA;
        }
        else if(type === "B") {
            return playerB;
        }
        else return { name: "", coinColor: "" }
    }

    return (
        <PlayerContext.Provider value={{ getPlayer, setPlayer, tempAssignPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayerProvider;