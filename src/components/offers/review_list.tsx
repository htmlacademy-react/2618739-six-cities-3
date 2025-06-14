import ReviewsItem from './review_item';
import ReviewPropType from '../../types/reviews';


type ReviewListProp = { reviewList: ReviewPropType[] }
function ReviewsList({ reviewList }: ReviewListProp): JSX.Element {
  const reviews = reviewList.map((review) => (
    <ReviewsItem
      key={review.id}
      id={review.id}
      userName={review.userName}
      comment={review.comment}
      date={review.date}
    />));
  return (
    <ul className="reviews__list">
      {reviews}
    </ul>
  );
}

export default ReviewsList;
