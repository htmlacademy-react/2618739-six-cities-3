import OfferContainer from '../../components/offers/offer_container';
import Map from '../../components/map';
import TOffer from '../../types/offers';
import { CITIES } from '../../const';
import { useParams } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { store } from '../../store';
import { fetchNearOffersAction, fetchOneOfferAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { selectActiveOffer, selectNearOffers } from '../../store/selectors/offers';
import { useAppSelector } from '../../hooks';

type offersProps = { offers: TOffer[] }
function Offer(offersProps: offersProps): JSX.Element {
  const params = useParams();
  const activeCard = params.id;
  const selectedOffer = offersProps.offers.find((offer) => offer.id === activeCard);
  const selectedOffers = offersProps.offers.filter((offer) => offer.city?.name === selectedOffer?.city?.name);
  useEffect(() => {
    const fetchOfferById = async () => {
      await store.dispatch(fetchOneOfferAction(activeCard || ''));
      await store.dispatch(fetchNearOffersAction(activeCard || ''));
    };
    fetchOfferById();
  }, [activeCard]);
  const activeOffer = useAppSelector(selectActiveOffer) || selectedOffer;
  const nearOffers = useAppSelector(selectNearOffers);
  const nearOffersList = nearOffers.slice(0, 3).map((nearOffer) => (<PlaceCard offersProp={nearOffer} key={nearOffer.id} id={0} cardClass={'near-places'} />));
  <PlaceCard offersProp={offersProps.offers[0]} id={0} cardClass={'near-places'} />;
  const offerGallery = activeOffer?.images?.slice(0, 6).map((image) => (
    <div className="offer__image-wrapper" key={image}>
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>));
  if (selectedOffer && activeCard) {
    return (
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerGallery}
            </div>
          </div>
          <OfferContainer offer={activeOffer || selectedOffer} />
          <section className="map">
            < Map city={CITIES.find((city) => city.title === selectedOffer?.city.name) || CITIES[0]} offers={selectedOffers} />
          </section>
          {(CITIES.find((city) => city.title === selectedOffer?.city.name) || CITIES[0]).title}
        </section >
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffersList}
            </div>
          </section>
        </div>
      </main >
    );
  }
  return (<div>404: Not found</div>);
}

export default Offer;
