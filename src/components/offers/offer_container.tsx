import { useParams } from 'react-router-dom';
import ReviewsForm from './review_form';
import ReviewsList from './review_list';
import { Page404 } from '../404';
import TOffer from '../../types/offers';
import { fetchReviewsAction, toBookmarksAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { selectReviews, selectReviewsStatus } from '../../store/selectors/reviews';
import { selectBookmarks } from '../../store/selectors/offers';
import { RequestStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors/user';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type offerProp = { offer: TOffer };

function OfferContainer({ offer }: offerProp): JSX.Element {
  const id = useParams().id || '';
  useEffect(() => {
    const fetchReviews = async () => {
      await store.dispatch(fetchReviewsAction(id));
    };
    fetchReviews();
  }, [id]);
  const Reviews = useAppSelector(selectReviews);
  const reviewsState = useAppSelector(selectReviewsStatus);
  let state = false;
  const bookmarks = useAppSelector(selectBookmarks);
  for (const bookmark of bookmarks) {
    if (bookmark.id === offer.id) {
      state = true;
    }
  }
  const bookmarkClass = () => {
    if (state) {
      return ('offer__bookmark-button offer__bookmark-button--active  button');
    } else {
      return ('offer__bookmark-button button');
    }
  };


  const bookMarkState = { id: offer.id, status: Number(!state) };
  const toBookmarks = () => {
    store.dispatch(toBookmarksAction(bookMarkState));
  };
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const bookmarkButton = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
        <button className={bookmarkClass()} type="button" data-testid='toBookMarks' onClick={toBookmarks}>
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>);
    } else {
      return (
        <Link to='/login' >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
        </Link>);
    }
  };
  if (!id) {
    return (<div><Page404 /></div>);
  }
  if (reviewsState === RequestStatus.Loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div className="offer__container container" data-testid='offer_container'>
      <div className="offer__wrapper">
        {offer.isPremium ?
          (
            <div className="offer__mark">
              <span>Premium</span>
            </div>) : null}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offer.title}
          </h1>
          {bookmarkButton()}
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: Math.round(offer.rating) * 20 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {offer.type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {offer.bedrooms} Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {offer.maxAdults} adults
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {offer.goods?.map((good) => (
              <li className="offer__inside-item" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
              <img className="offer__avatar user__avatar" src={offer.host && offer.host.avatarUrl ? (offer.host.avatarUrl) : ''} width="74" height="74" alt="Host avatar" />
            </div>
            <span className="offer__user-name">
              {offer.host ? (offer.host.name) : null}
            </span>
            {offer.host && offer.host.isPro ? (
              <span className="offer__user-status">
                Pro
              </span>) : null}
          </div>
          <div className="offer__description">
            <p className="offer__text">
              {offer.description}
            </p>
          </div>
        </div>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{Reviews.length}</span></h2>
          <ReviewsList reviewList={Reviews} />
          <ReviewsForm />
        </section>
      </div>
    </div >);
}

export default OfferContainer;
