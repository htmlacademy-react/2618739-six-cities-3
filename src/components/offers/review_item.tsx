import ReviewPropType from '../../types/reviews';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
function ReviewsItem({ userName, comment, date }: ReviewPropType): JSX.Element {
  const dateFromString = new Date(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
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
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{format(dateFromString, 'LLLL yyyy', { locale: ru })}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
