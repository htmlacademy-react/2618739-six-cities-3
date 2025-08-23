import { useAppSelector } from '../../hooks';
import { selectBookmarks } from '../../store/selectors/offers';
import TOffer from '../../types/offers';
import { Navigate } from 'react-router-dom';

export function FavoritesEmpty(): JSX.Element {
  const offers: TOffer[] = useAppSelector(selectBookmarks);
  if (offers.length === 0) {
    return (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>);
  }
  else {
    return (
      <Navigate to='/favorites' />);
  }
};
