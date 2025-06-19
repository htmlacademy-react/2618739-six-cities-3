import ReviewsItem from './review_item';
import ReviewPropType from '../../types/reviews';


type ReviewListProp = { reviewList: ReviewPropType[] }
function ReviewsList({ reviewList }: ReviewListProp): JSX.Element {
  const reviews = reviewList.map((review) => (
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

export default ReviewsList;
