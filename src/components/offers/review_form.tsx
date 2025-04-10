import FormRatingInput from './form_rating_input';
import { useState } from 'react';
import Star from './star';
function ReviewsForm(): JSX.Element {
  //type ReviewStateType = { stars: number; text: string };
  const [ReviewState, setReviewState] = useState({ stars: 0, text: '' });
  function setStars(newStars: number) {
    setReviewState({
      ...ReviewState,
      stars: newStars
    });
  }
  function setText(newText: string) {
    setReviewState({
      ...ReviewState,
      text: newText
    });
  }
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <FormRatingInput value={5} />
        <Star for_star={'5-stars'} title_star={'perfect'} setRating={() => setStars(5)} />
        <FormRatingInput value={4} />
        <Star for_star={'4-stars'} title_star={'good'} setRating={() => setStars(4)} />
        <FormRatingInput value={3} />
        <Star for_star={'3-stars'} title_star={'not bad'} setRating={() => setStars(3)} />
        <FormRatingInput value={2} />
        <Star for_star={'2-stars'} title_star={'badly'} setRating={() => setStars(2)} />
        <FormRatingInput value={1} />
        <Star for_star={'1-stars'} title_star={'terribly'} setRating={() => setStars(1)} />
      </div>
      <textarea onChange={(e) => {
        const newText = e.target.value;
        return (newText ? setText(newText) : null);
      }} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
            Ваша оценка: {ReviewState.stars} Ваш отзыв: {ReviewState.text}
    </form>);
}

export default ReviewsForm;
