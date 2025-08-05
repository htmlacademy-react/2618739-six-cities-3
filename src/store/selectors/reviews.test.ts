import { RequestStatus } from '../../const';
import { selectReviews, selectReviewsStatus } from './reviews';
import { mockReview } from '../../mock/reviews';

describe('reviews slice selectors', () => {

  it('Shoud return reviews from the state', () => {
    const state = {
      reviews: {
        reviews: [mockReview],
        status: RequestStatus.Failed
      }
    };
    const res = selectReviews(state);
    expect(res).toEqual([mockReview]);
  });

  it('Shoud return status from the state', () => {
    const state = {
      reviews: {
        reviews: [mockReview],
        status: RequestStatus.Loading
      }
    };
    const res = selectReviewsStatus(state);
    expect(res).toEqual(RequestStatus.Loading);
  });


});
