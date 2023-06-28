import { ReactNode, createContext, useContext, useState } from "react";

interface Player {
    name: string;
    coinColor: string;
}

interface PlayerContext {
  getPlayer: (type: string) => Player;
  setPlayer: (type: string, player: Player) => void;
}

const PlayerContext = createContext<PlayerContext>({
    getPlayer: () => {
        return {
        name: "",
        coinColor: "",
        };
    },
    setPlayer: () => {},
});

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playerA, setPlayerA] = useState<Player>({
        name: "",
        coinColor: "",
    });

    const [playerB, setPlayerB] = useState<Player>({
        name: "",
        coinColor: "",
    });

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
        }
        else if(type === "B") {
            setPlayerB(player);
        }
    }

    return (
        <PlayerContext.Provider value={{ getPlayer, setPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}