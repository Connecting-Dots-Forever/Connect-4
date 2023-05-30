import { faker } from "@faker-js/faker"

export const getRandomUsername = () => {
    try {
        return faker.person.firstName();
    } catch (error) {
        console.log(error);
        return null;
    }
}