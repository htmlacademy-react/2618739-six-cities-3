import TOffer from '../../types/offers';
import { memo } from 'react';
import { store } from '../../store';
import { toBookmarksAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { selectBookmarks } from '../../store/selectors/offers';

type cardInfoProps = { offersProp: TOffer };

function PlaceCardInfo({ offersProp }: cardInfoProps): JSX.Element {
  const bookmarks = useAppSelector(selectBookmarks);
  let state = false;
  for (const bookmark of bookmarks) {
    if (bookmark.id === offersProp.id) {
      state = true;
    }
  }
  const bookmarkClass = () => {
    if (state) {
      return ('place-card__bookmark-button place-card__bookmark-button--active  button');
    } else {
      return ('place-card__bookmark-button button');
    }
  };
  const bookMarkState = { id: offersProp.id, status: Number(!state) };
  const toBookmarks = () => {
    store.dispatch(toBookmarksAction(bookMarkState));
  };
  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offersProp.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClass()} type="button" onClick={toBookmarks}>
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href={`/offer/${offersProp.id}`}>{offersProp.title}</a>
      </h2>
      <p className="place-card__type">{offersProp.type}</p>
    </div>);
}

export default memo(PlaceCardInfo);
