import PlaceCardList from '../../components/place-cards-list';
import TOffer from '../../types/offers';
import Map from '../../components/map';
import { AMSTERDAM } from '../../const'
import { useState } from 'react';

type MainPageProps = {
  rentCount: number;
  offersProps: TOffer[];
}

function Main(mainPageProps: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  const selectedCard = mainPageProps.offersProps[activeCard];
  const SelectedPoint = { title: selectedCard.title, lat: selectedCard.location[0], lng: selectedCard.location[0] };
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{mainPageProps.rentCount} places to stay in Amsterdam</b>
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
            <PlaceCardList offersProps={mainPageProps.offersProps} setActiveCard={setActiveCard} />
            Выбрана карточка {activeCard}
          </section>
          <div className="cities__right-section">
            <section className="cities__map">
              <Map city={AMSTERDAM} offers={mainPageProps.offersProps} selectedPoint={SelectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main >);
}
export default Main;
