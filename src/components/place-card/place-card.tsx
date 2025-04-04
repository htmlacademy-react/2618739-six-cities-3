import PlaceCardInfo from './place-card__info';
import TOffer from '../../types/offers';

type PlaceCardProps = { offersProp: TOffer }

function PlaceCard({ offersProp }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        {offersProp.isPremium ?
          <span>Premium</span> : null}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <PlaceCardInfo offersProp={offersProp} />
    </article>);
}
export default PlaceCard;
