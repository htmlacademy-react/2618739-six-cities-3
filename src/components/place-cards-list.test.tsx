import { render, screen } from '@testing-library/react';
import PlaceCardList from './place-cards-list';
import { fetchMockOffer } from '../mock/offers';


describe('Component: PlaceCardList', () => {
  it('should render correctly', () => {
    vi.mock('./place-card/place-card');
    const mockOffers = [fetchMockOffer()]
    render(<PlaceCardList offersProps={mockOffers} />);
    expect(screen.getByTestId('card list')).toBeInTheDocument();
  });
}
);