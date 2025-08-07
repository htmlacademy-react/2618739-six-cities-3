import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PlaceCard from './place-card';
import { fetchMockOffer } from '../../mock/offers';
import { mockStore, withStore } from '../../mock/mock-component';

describe('Component: PlaceCardInfo', () => {
  it('should render correctly', () => {
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<PlaceCard offersProp={mockOffer} id={1} cardClass={'test'} />, mockStore);
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={withStoreComponent} />
        </Routes>
      </MemoryRouter>);
    render(preparedComponent);
    expect(screen.getByTestId('testCard')).toBeInTheDocument();
  });
}
);
