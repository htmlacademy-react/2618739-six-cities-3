import PlaceCardList from '../../components/place-cards-list';
import { selectCity } from '../../store/selectors/offers';
import CitiesList from '../../components/cities_list';
import { useAppSelector } from '../../hooks/index';
import TOffer from '../../types/offers';
import Map from '../../components/map';
import { CITIES, RequestStatus } from '../../const';
import { City } from '../../types/map_types';
import SortingVariants from '../../components/sorting_variants';
import useSortOffers from '../../hooks/sorting';
import { selectSorting } from '../../store/selectors/offers';

type MainPageProps = {
  status: RequestStatus;
  offersProps: TOffer[];
}

function getCity(): City {
  return (CITIES.filter((city) => city.title === useAppSelector(selectCity))[0] || CITIES[0]);
}

function filterOffers(offers: TOffer[], selectedCity: City): TOffer[] {
  if (offers.length < 1) {
    return (offers);
  }
  return (offers.filter((offer) => offer.city.name === selectedCity.title));
}

function Main(mainPageProps: MainPageProps): JSX.Element {
  const selectedCity = getCity();
  const filteredOffers = filterOffers(mainPageProps.offersProps, selectedCity);
  const selectedSorting = useAppSelector(selectSorting);
  const selectedOffers = useSortOffers(filteredOffers, selectedSorting);

  if (mainPageProps.status && mainPageProps.status === RequestStatus.Loading) {
    return (
      <div>Loading...
        <div>
          <img src="img/Spinner-5.gif" />
        </div>
      </div>);
  }
  if (selectedOffers.length > 0) {
    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {selectedCity.title}</b>
              <SortingVariants />
              <PlaceCardList offersProps={selectedOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                < Map city={selectedCity}
                  offers={selectedOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main >);
  } else {
    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </main >);
  }
}
export default Main;
