import Private from '../../components/private';
import { useAppSelector } from '../../hooks';
import { selectBookmarks } from '../../store/selectors/offers';
import TOffer from '../../types/offers';
import { Link } from 'react-router-dom';
import PlaceCardInfo from '../../components/place-card/place-card__info';
import { CITIES } from '../../const';
import { Dictionary } from '@reduxjs/toolkit';

function Favorites(): JSX.Element {
  const offers: TOffer[] = useAppSelector(selectBookmarks);
  if (offers.length === 0) {
    return <div>Nothing yet saved</div>
  }
  else {
    let citiesList: JSX.Element[] = [];
    let cards_dict: Dictionary<JSX.Element[]> = {};
    let cards: JSX.Element[];
    for (const city_num in CITIES) {
      console.log(CITIES[city_num].title)
      cards = offers.filter((offer_city) => offer_city.city.name === CITIES[city_num].title).map((offer: TOffer) =>
      (
        <article key={offer.id} className="favorites__card place-card" data-testid='favoritesCard'>
          {offer.isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> :
            null}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${offer.id}`}>
              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
            </Link>
          </div>
          <PlaceCardInfo offersProp={offer} />
        </article >));
      cards_dict[CITIES[city_num].title] = cards;
      if (cards.length > 0) {
        citiesList.push(
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{CITIES[city_num].title}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cards}
            </div>
          </li>)
      }
    }


    return (
      <Private>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {citiesList}
              </ul>
            </section>
          </div>
        </main>
      </Private >
    );
  }
}

export default Favorites;
