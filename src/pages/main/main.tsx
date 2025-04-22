import PlaceCardList from '../../components/place-cards-list';
import { selectCity } from '../../store/selectors/offers';
import CitiesList from '../../components/cities_list';
import { useAppSelector } from '../../hooks/index'
import TOffer from '../../types/offers';
import Map from '../../components/map';
import { CITIES } from '../../const';
import { useState } from 'react';

type MainPageProps = {
  offersProps: TOffer[];
}

function Main(mainPageProps: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const selectedCard = mainPageProps.offersProps[activeCard];
  const SelectedPoint = { title: selectedCard.title, lat: selectedCard.location[0], lng: selectedCard.location[0] };
  const selectedCity = CITIES.filter((city) => city.title == useAppSelector(selectCity))[0] || CITIES[0];
  const selectedOffers = mainPageProps.offersProps.filter((offer) => offer.city == useAppSelector(selectCity));
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
            { id: 6, cityName: 'Dusseldorf' }]} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedOffers.length} places to stay in {selectedCity.title}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlaceCardList offersProps={selectedOffers} setActiveCard={setActiveCard} />
            Выбрана карточка {activeCard}
          </section>
          <div className="cities__right-section">
            Выбранное место: {SelectedPoint?.title}
            <section className="cities__map">
              < Map city={selectedCity}
                offers={selectedOffers} selectedPoint={SelectedPoint} />
            </section>
            на карте показан город {selectedCity.title}
          </div>
        </div>
      </div>
    </main >);
}
export default Main;
