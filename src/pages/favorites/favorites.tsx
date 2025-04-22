import Private from '../../components/private';
import TOffer from '../../types/offers';
import { Link } from 'react-router-dom';
type offersProps = { offers: TOffer[] }
function Favorites({ offers }: offersProps): JSX.Element {
  const cards = offers.map((offer: TOffer) =>
    (
      <article key={offer.id} className="favorites__card place-card" >
        <div className="place-card__mark">
          {offer.isPremium ?
            <span>Premium</span> :
            null}
        </div>
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.images[0]} width="150" height="110" alt="Place image" />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article >));
  return (
    <Private authorizationStatus="Auth">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {cards}
                </div>

              </li>
            </ul>
          </section>
        </div>
      </main>
    </Private >
  );
}

export default Favorites;
