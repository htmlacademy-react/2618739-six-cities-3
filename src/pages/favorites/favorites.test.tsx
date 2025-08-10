import { render, screen } from '@testing-library/react';
import Favorites from './favorites';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';

describe('Page: Favorites', () => {

  it('should render correctly', () => {
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Favorites />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    expect(screen.getAllByTestId('favoritesCard')).toHaveLength(mockStore.offers.favorites.length);
  });
}
);
