import { AuthData, UserType } from "../types/user";
import faker from 'faker';

export function mockUser(): UserType {
    return (
        {
            name: faker.name.findName(),
            avatarUrl: faker.internet.url(),
            isPro: faker.datatype.boolean(),
            email: faker.internet.email(),
            token: faker.datatype.string()
        }
    );
};

export function mockAuthData(): AuthData {
    return ({
        email: faker.internet.email(),
        password: faker.datatype.string()
    });
}