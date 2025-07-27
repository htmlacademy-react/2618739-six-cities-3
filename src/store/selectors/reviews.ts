import { State } from '../../types/store';

const selectReviews = (state: Pick<State, 'reviews'>) => state.reviews.reviews;

const selectReviewsStatus = (state: Pick<State, 'reviews'>) => state.reviews.status;

export { selectReviews, selectReviewsStatus };
