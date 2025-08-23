import { useAppSelector } from '../../hooks';
import { selectBookmarks } from '../../store/selectors/offers';
import TOffer from '../../types/offers';
import { Link, Navigate } from 'react-router-dom';
import PlaceCardInfo from '../../components/place-card/place-card__info';
import { CITIES } from '../../const';

function Favorites(): JSX.Element {
  const offers: TOffer[] = useAppSelector(selectBookmarks);
  if (offers.length === 0) {
    return (
      <Navigate to='/favorites_empty' />);
  } else {
    const citiesList: JSX.Element[] = [];
    let cards: JSX.Element[];
    for (const city of CITIES) {
      cards = offers.filter((offerCity) => offerCity.city.name === city.title).map((offer: TOffer) =>
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
      if (cards.length > 0) {
        citiesList.push(
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city.title}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cards}
            </div>
          </li>);
      }
    }
    return (
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
    );
  }
}


export default Favorites;
