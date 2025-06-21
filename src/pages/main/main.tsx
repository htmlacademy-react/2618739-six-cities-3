import PlaceCardList from '../../components/place-cards-list';
import { selectCity } from '../../store/selectors/offers';
import CitiesList from '../../components/cities_list';
import { useAppSelector } from '../../hooks/index';
import TOffer from '../../types/offers';
import Map from '../../components/map';
import { CITIES, RequestStatus } from '../../const';
import { useState } from 'react';
import { City } from '../../types/map_types';
import SortingVariants from '../../components/sorting_variants';
import useSortOffers from '../../hooks/sorting';
import { useCallback } from 'react';

type MainPageProps = {
  status: RequestStatus;
  offersProps: TOffer[];
}

function getCity(): City {
  return (CITIES.filter((city) => city.title === useAppSelector(selectCity))[0] || CITIES[0]);
}

const filterOffers = useCallback((offers: TOffer[], selectedCity: City): TOffer[] => {
  if (offers.length < 1) {
    return (offers);
  }
  return (offers.filter((offer) => offer.city.name === selectedCity.title));
}, []);

function Main(mainPageProps: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const selectedCity = getCity();
  const selectedOffers = useSortOffers(filterOffers(mainPageProps.offersProps, selectedCity));

  if (mainPageProps.status && mainPageProps.status === RequestStatus.Loading) {
    return (
      <div>Loading...
        <div>
          <img src="img/Spinner-5.gif" />
        </div>
      </div>);
  }
  const selectedCard = selectedOffers[activeCard];
  const SelectedPoint = { title: selectedCard.title, lat: selectedCard.location.latitude, lng: selectedCard.location.longitude };
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList citiesList={[
            { id: 1, cityName: 'Paris' },
            { id: 2, cityName: 'Cologne' },
            { id: 3, cityName: 'Brussels' },
            { id: 4, cityName: 'Amsterdam' },
            { id: 5, cityName: 'Hamburg' },
            { id: 6, cityName: 'Dusseldorf' }]}
          />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedOffers.length} places to stay in {selectedCity.title}</b>
            <SortingVariants />
            <PlaceCardList offersProps={selectedOffers} setActiveCard={setActiveCard} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map">
              < Map city={selectedCity}
                offers={selectedOffers} selectedPoint={SelectedPoint}
              />
            </section>
          </div>
        </div>
      </div>
    </main >);
}
export default Main;
