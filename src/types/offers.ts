export type offerId = string;

export type BookMarkState = { id: offerId; status: number };

type TOffer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: { name: string };
    location: { latitude: number; longitude: number };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: { name: string; avatarUrl: string; isPro: boolean };
    images: string[];
    maxAdults: number;
    previewImage: string;
}
export default TOffer;
