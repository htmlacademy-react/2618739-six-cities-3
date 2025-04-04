import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';

type PlaceCardListType = { offersProps: TOffer[] };

function PlaceCardList({ offersProps }: PlaceCardListType): JSX.Element {
    const cards = offersProps.map((offer: TOffer) => <PlaceCard offersProp={offersProps[offer.id]} key={offer.id} />);
    return (
        <div className="cities__places-list places__list tabs__content">
            {cards}
        </div >
    );
}

export default PlaceCardList;
