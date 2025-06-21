import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';
import { memo } from 'react';

type PlaceCardListType = { offersProps: TOffer[]; setActiveCard: (id: number) => void };

function PlaceCardList({ offersProps, setActiveCard }: PlaceCardListType): JSX.Element {

  const cards = offersProps.map((offer: TOffer) => (
    <PlaceCard offersProp={offer} key={offer.id} setActiveCard={() => {
      setActiveCard(offersProps.indexOf(offer));
    }} cardClass={'cities'}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div >

  );
}

export default memo(PlaceCardList, (prevProps, nextProp) => {
  return (prevProps.offersProps === nextProp.offersProps)
});
