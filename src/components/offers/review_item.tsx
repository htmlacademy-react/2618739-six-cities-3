import ReviewPropType from '../../types/reviews';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
function ReviewsItem(reviewProp: ReviewPropType): JSX.Element {
  const dateFromString = new Date(reviewProp.date);
  console.log(reviewProp)
  if (!reviewProp.user) {
    return (<div></div>)
  }
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewProp.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewProp.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewProp.comment}
        </p>
        <time className="reviews__time" dateTime={reviewProp.date}>{format(dateFromString, 'LLLL yyyy', { locale: ru })}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
