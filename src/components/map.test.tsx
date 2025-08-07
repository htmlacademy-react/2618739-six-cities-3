import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import Map from './map';
import { CITIES } from '../const';
import { fetchMockOffer } from '../mock/offers';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<Map city={CITIES[0]} offers={[fetchMockOffer(), fetchMockOffer()]} />, mockStore);
    render(withStoreComponent);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
}
);
