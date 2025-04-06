import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';
import { useState } from 'react';

type PlaceCardListType = { offersProps: TOffer[] };

function PlaceCardList({ offersProps }: PlaceCardListType): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const cards = offersProps.map((offer: TOffer) => (
    <PlaceCard offersProp={offer} key={offer.id} setActiveCard={() => {
      setActiveCard(offer.id);
    }}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
            Выбрана карточка {activeCard}
    </div >

  );
}

export default PlaceCardList;
