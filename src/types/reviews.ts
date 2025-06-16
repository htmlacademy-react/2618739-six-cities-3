export type ApiReviewType = {
    comment: string,
    rating: number
}

export type offer_id = string;

type ReviewPropType = {
    id: number;
    user: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
    };
    comment: string;
    date: string;
    rating: number;
};
export default ReviewPropType;
