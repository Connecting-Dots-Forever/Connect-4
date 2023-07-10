import { getRandomPlayer } from "./DummyPlayer";

interface IPlayerData {
    name: string;
    coinColor: string;
}

const getPlayerData = (player: string) => {
    if(typeof window !== 'undefined' && localStorage) {
        const objString = localStorage.getItem(player);

        if(objString)
            return JSON.parse(objString) as IPlayerData;
    }
    return null;
}

const setPlayerData = (player: string, user: IPlayerData) => {
    if(typeof window !== 'undefined' && localStorage) {
        const objString = JSON.stringify(user);
        localStorage.setItem(player, objString);
        return true;
    }
    return false;
}

export default { getPlayerData, setPlayerData }