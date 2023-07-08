interface IPlayerData {
    name: string;
    coinColor: string;
}

const getPlayerData = (player: string) => {
    const objString = localStorage.getItem(player);
    if(objString)
        return JSON.parse(objString);
    return {name: '', coinColor: ''};
}

const setPlayerData = (player: string, user: IPlayerData) => {
    const objString = JSON.stringify(user);
    localStorage.setItem(player, objString);
}

export { getPlayerData, setPlayerData }