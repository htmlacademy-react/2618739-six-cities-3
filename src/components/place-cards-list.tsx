import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';
import { useState } from 'react';

type PlaceCardListType = { offersProps: TOffer[] };

function PlaceCardList({ offersProps }: PlaceCardListType): JSX.Element {
    const [activeCard, setActiveCard] = useState(0)
    console.log(activeCard)
    const cards = offersProps.map((offer: TOffer) => <PlaceCard offersProp={offer} key={offer.id} onMouseOver={() => setActiveCard(offer.id)} />);
    return (
        <div className="cities__places-list places__list tabs__content">
            {cards}
        </div >
    );
}

export default PlaceCardList;
