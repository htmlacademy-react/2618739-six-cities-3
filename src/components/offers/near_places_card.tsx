import { Link } from 'react-router-dom';
import TOffer from '../../types/offers';


type OfferCardProps = { offer: TOffer }

function NearPlacesCard({ offer }: OfferCardProps): JSX.Element {
  const { id, price, images, description, offertype } = offer;
  const linkToOffer = `/offer${id}`;
  const placeCardImage: string = images[0];
  return (
    <article className="near-places__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={linkToOffer}>
          <img className="place-card__image" src={placeCardImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{description}</Link>
        </h2>
        <p className="place-card__type">{offertype}</p>
      </div>
    </article >
  );
}
export default NearPlacesCard;
