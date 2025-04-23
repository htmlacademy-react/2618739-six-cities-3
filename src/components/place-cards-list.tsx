import TOffer from '../types/offers';
import PlaceCard from './place-card/place-card';

type PlaceCardListType = { offersProps: TOffer[]; setActiveCard: (id: number) => void };

function PlaceCardList({ offersProps, setActiveCard }: PlaceCardListType): JSX.Element {
  //const [activeCard, setActiveCard] = useState(0);
  const cards = offersProps.map((offer: TOffer) => (
    <PlaceCard offersProp={offer} key={offer.id} setActiveCard={() => {
      setActiveCard(offer.id);
    }} cardClass={'cities'}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div >

  );
}

export default PlaceCardList;
