import OfferContainer from '../../components/offers/offer_container';
import Map from '../../components/map';
import TOffer from '../../types/offers';
import { CITIES } from '../../const';
import { useParams } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { useState } from 'react';
type offersProps = { offers: TOffer[] }
function Offer(offersProps: offersProps): JSX.Element {
  const params = useParams();
  const [activeCard, setActiveCard] = useState(Number(params.id));
  const selectedOffer = offersProps.offers[activeCard];
  const selectedOffers = offersProps.offers.filter((offer) => offer.city === selectedOffer.city);
  const selectedPoint = { title: selectedOffer.title, lat: selectedOffer.location[0], lng: selectedOffer.location[1] };
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <OfferContainer offer={selectedOffer} />
        <section className="map">
          < Map city={CITIES.find((city) => city.title === selectedOffer.city) || CITIES[0]} offers={selectedOffers} selectedPoint={selectedPoint} />
        </section>
        {(CITIES.find((city) => city.title === selectedOffer.city) || CITIES[0]).title}
      </section >
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlaceCard offersProp={offersProps.offers[0]} setActiveCard={setActiveCard} cardClass={'near-places'} />
            <PlaceCard offersProp={offersProps.offers[1]} setActiveCard={setActiveCard} cardClass={'near-places'} />
            <PlaceCard offersProp={offersProps.offers[2]} setActiveCard={setActiveCard} cardClass={'near-places'} />
          </div>
        </section>
      </div>
    </main >
  );
}

export default Offer;
