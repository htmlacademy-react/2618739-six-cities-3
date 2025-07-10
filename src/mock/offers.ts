import TOffer from "../types/offers";
import faker from 'faker';
export function fetchMockOffer(): TOffer {
    return (
        {
            id: faker.datatype.uuid(),
            title: faker.datatype.string(),
            type: faker.datatype.string(),
            price: faker.datatype.number(),
            city: { name: faker.address.city() },
            location: { latitude: faker.datatype.number(), longitude: faker.datatype.number() },
            isFavorite: faker.datatype.boolean(),
            isPremium: faker.datatype.boolean(),
            rating: faker.datatype.number(),
            description: faker.datatype.string(),
            bedrooms: faker.datatype.number(),
            goods: [faker.datatype.string()],
            host: faker.name.firstName(),
            images: [faker.internet.url()],
            maxAdults: faker.datatype.number(),
            previewImage: faker.datatype.string()
        })
}