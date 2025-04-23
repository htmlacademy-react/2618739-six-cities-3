import ReviewsItem from './review_item';
import reviewPropType from '../../types/reviews';


type reviewListProp = { reviewList: reviewPropType[] }
function ReviewsList({ reviewList }: reviewListProp): JSX.Element {
  const reviews = reviewList.map((review) => (
    <ReviewsItem
      key={review.id}
      id={review.id}
      userName={review.userName}
      text={review.text}
      dateTime={review.dateTime}
    />));
  return (
    <ul className="reviews__list">
      {reviews}
    </ul>
  );
}

export default ReviewsList;
