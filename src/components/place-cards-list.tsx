import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';
import { memo } from 'react';

type PlaceCardListType = { offersProps: TOffer[]; };

function PlaceCardList({ offersProps }: PlaceCardListType): JSX.Element {

  const cards = offersProps.map((offer: TOffer) => (
    <PlaceCard offersProp={offer} id={offersProps.indexOf(offer)} key={offer.id} cardClass={'cities'}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div >

  );
}

export default memo(PlaceCardList, (prevProps, nextProp) => (prevProps.offersProps === nextProp.offersProps));
