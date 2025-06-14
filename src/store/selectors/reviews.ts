import { State } from '../../types/store';

const selectReviews = (state: State) => state.reviews.reviews;

const selectReviewsStatus = (state: State) => state.reviews.status;

export { selectReviews, selectReviewsStatus };
