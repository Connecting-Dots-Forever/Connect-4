interface IPlayerData {
    name: string;
    profile: string;
    coinColor: string;
}

const getPlayerData = (player: string) => {
    const objString = localStorage.getItem(player);
    if(objString)
        return JSON.parse(objString);
    return {name: '', profile: '', coinColor: ''};
}

const setPlayerData = (player: string, user: IPlayerData) => {
    const objString = JSON.stringify(user);
    localStorage.setItem(player, objString);
}

export { getPlayerData, setPlayerData }