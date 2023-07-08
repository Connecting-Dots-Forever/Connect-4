interface IPlayerData {
    name: string;
    coinColor: string;
}

const getPlayerData = (player: string) => {
    if(typeof window !== 'undefined' && localStorage) {
        const objString = localStorage.getItem(player);
        if(objString)
            return JSON.parse(objString) as IPlayerData;
        return null;
    }
    return null;
}

const setPlayerData = (player: string, user: IPlayerData) => {
    if(typeof window !== 'undefined' && localStorage) {
        const objString = JSON.stringify(user);
        localStorage.setItem(player, objString);
    }
}

const PLAYERA_COLOR = "#FF6900";
const PLAYERB_COLOR = "#EB144C";

export default { getPlayerData, setPlayerData, PLAYERA_COLOR, PLAYERB_COLOR }