import NearPlacesCard from '../../components/offers/near_places_card';
import OfferContainer from '../../components/offers/offer_container';
import TOffer from '../../types/offers';
type offersProps = { offers: TOffer[] }
function Offer(offersProps: offersProps): JSX.Element {
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
        <OfferContainer />
        <section className="offer__map map"></section>
      </section >
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <NearPlacesCard props={offersProps.offers[0]} />
            <NearPlacesCard props={offersProps.offers[1]} />
            <NearPlacesCard props={offersProps.offers[2]} />
          </div>
        </section>
      </div>
    </main >
  );
}

export default Offer;
