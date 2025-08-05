import { render, screen } from '@testing-library/react';
import PlaceCardInfo from './place-card__info';
import { fetchMockOffer } from '../../mock/offers';
import { withStore } from '../../mock/mock-component';
import { CITIES, RequestStatus } from '../../const';
import { Sorting } from '../../types/sorting';

describe('Component: PlaceCardInfo', () => {
  it('should render correctly', () => {
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<PlaceCardInfo offersProp={mockOffer} />, {
      offers:
      {
        city: CITIES[0].title,
        offers: [],
        favorites: [],
        activeOffer: 1,
        status: RequestStatus.Idle,
        sorting: Sorting.Default
      },
    });
    render(withStoreComponent);
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });
}
);
