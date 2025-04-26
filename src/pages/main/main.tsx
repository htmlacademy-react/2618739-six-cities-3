import PlaceCardList from '../../components/place-cards-list';
import { selectCity } from '../../store/selectors/offers';
import CitiesList from '../../components/cities_list';
import { useAppSelector } from '../../hooks/index';
import TOffer from '../../types/offers';
import Map from '../../components/map';
import { CITIES } from '../../const';
import { useState } from 'react';
import { City } from '../../types/map_types';
import SortingVariants from '../../components/sorting_variants';
import { selectSorting } from '../../store/selectors/offers';

type MainPageProps = {
  offersProps: TOffer[];
}

function getCity(): City {
  return (CITIES.filter((city) => city.title === useAppSelector(selectCity))[0] || CITIES[0]);
}

function filterOffers(offers: TOffer[]): TOffer[] {
  return (offers.filter((offer) => offer.city === useAppSelector(selectCity)));
}

function sortOffers(selectedOffers: TOffer[]): TOffer[] {
  const selectedSorting = useAppSelector(selectSorting);
  console.log(selectedSorting)
  switch (selectedSorting) {
    case 'Price: low to high':
      console.log('Sorting by price');
      return (selectedOffers.sort((a, b) => a.price - b.price));
    case 'Price: high to low':
      console.log('Sorting by price');
      return (selectedOffers.sort((a, b) => a.price - b.price).reverse());
    case 'Top rated first':
      console.log('Sorting by rating');
      return (selectedOffers.sort((a, b) => a.rating - b.rating));
    default:
      console.log('Sorting by popularity');
      return (selectedOffers);
  }
}

function Main(mainPageProps: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const selectedCard = mainPageProps.offersProps[activeCard];
  const SelectedPoint = { title: selectedCard.title, lat: selectedCard.location[0], lng: selectedCard.location[0] };
  const selectedCity = getCity();
  const selectedOffers = sortOffers(filterOffers(mainPageProps.offersProps));
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
