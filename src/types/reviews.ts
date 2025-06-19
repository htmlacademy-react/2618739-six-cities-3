export type ApiReviewType = {
    comment: string;
    rating: number;
}

export type offerId = string;

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
