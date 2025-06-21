import PlaceCardInfo from './place-card__info';
import TOffer from '../../types/offers';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type PlaceCardProps = { offersProp: TOffer; setActiveCard: (id: string) => void; cardClass: string }

function PlaceCard({ offersProp, setActiveCard, cardClass }: PlaceCardProps): JSX.Element {
  const offerPath = `/offer/${offersProp.id}`;
  return (
    <article className={`${cardClass}__card place-card`} onMouseOver={() => {
      setActiveCard(offersProp.id);
    }}
    >
      <div className="place-card__mark">
        {offersProp.isPremium ?
          <span>Premium</span> : null}
      </div>
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPath} >
          <img className="place-card__image" src={offersProp.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <PlaceCardInfo offersProp={offersProp} />
    </article >);
}
export default memo(PlaceCard, (prevProps, nextProps) => { return (prevProps.offersProp === nextProps.offersProp) });
