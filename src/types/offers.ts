type TOffer = {
    id: number;
    title: string;
    type: string;
    price: number;
    city: string;
    location: number[];
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: string;
    images: string[];
    maxAdults: number;
}
export default TOffer;
