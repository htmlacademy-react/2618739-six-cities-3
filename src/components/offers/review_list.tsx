import ReviewsItem from './review_item';
import ReviewPropType from '../../types/reviews';
import { memo } from 'react';
import { MAX_REVIEW_NUM } from '../../const';


type ReviewListProp = { reviewList: ReviewPropType[] }
function ReviewsList({ reviewList }: ReviewListProp): JSX.Element {
  const reviewsProp = [...reviewList];
  reviewsProp.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const reviews = reviewsProp.slice(0, MAX_REVIEW_NUM).map((review) => (
    <ReviewsItem
      key={review.id}
      id={review.id}
      user={review.user}
      comment={review.comment}
      date={review.date}
      rating={review.rating}
    />));
  return (
    <ul className="reviews__list">
      {reviews}
    </ul>
  );
}

export default memo(ReviewsList);
