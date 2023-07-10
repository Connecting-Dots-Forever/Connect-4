import { faker } from "@faker-js/faker"

const PLAYERA_COLOR = "#FF6900";
const PLAYERB_COLOR = "#EB144C";

const getRandomUsername = () => {
    try {
        return faker.person.firstName();
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getRandomColor = (type: string) => {
    return type === "A" ? PLAYERA_COLOR : PLAYERB_COLOR;
}

export const getRandomPlayer = (type: string) => {
    return {
        name: getRandomUsername() || 'random',
        coinColor: getRandomColor(type)
    }
}