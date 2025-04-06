import PlaceCardInfo from './place-card__info';
import TOffer from '../../types/offers';
import { Link } from 'react-router-dom';

type PlaceCardProps = { offersProp: TOffer, setActiveCard: (id: number) => void }

function PlaceCard({ offersProp, setActiveCard }: PlaceCardProps): JSX.Element {
  const offerPath = `/offer/${offersProp.id}`;
  return (
    <article className="cities__card place-card" onMouseOver={() => { setActiveCard(offersProp.id) }}>
      <div className="place-card__mark">
        {offersProp.isPremium ?
          <span>Premium</span> : null}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerPath} >
          <img className="place-card__image" src={offersProp.images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <PlaceCardInfo offersProp={offersProp} />
    </article >);
}
export default PlaceCard;
