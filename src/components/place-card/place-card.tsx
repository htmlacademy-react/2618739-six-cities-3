import PlaceCardInfo from './place-card__info';
import TOffer from '../../types/offers';
import { Link } from "react-router-dom";

type PlaceCardProps = { offersProp: TOffer }

function PlaceCard({ offersProp }: PlaceCardProps): JSX.Element {
  const offer_path = "/offer/" + offersProp.id
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        {offersProp.isPremium ?
          <span>Premium</span> : null}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offer_path} >
          <img className="place-card__image" src={offersProp.images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <PlaceCardInfo offersProp={offersProp} />
    </article >);
}
export default PlaceCard;
