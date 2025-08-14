import { render, screen } from '@testing-library/react';
import PlaceCardInfo from './place-card__info';
import { fetchMockOffer } from '../../mock/offers';
import { withStore } from '../../mock/mock-component';
import { AuthorizationStatus, CITIES, RequestStatus } from '../../const';
import { Sorting } from '../../types/sorting';
import userEvent from '@testing-library/user-event';
import * as actions from '../../store/api-actions';

describe('Component: PlaceCardInfo', () => {
  it('should render correctly', () => {
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<PlaceCardInfo offersProp={mockOffer} />, {
      offers:
      {
        city: CITIES[0].title,
        offers: [],
        favorites: [],
        activeOfferId: 1,
        status: RequestStatus.Idle,
        sorting: Sorting.Default
      },
      user: { auth: AuthorizationStatus.Auth }
    });
    render(withStoreComponent);
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });
  it('should put offer to bookmarks by click on a button', async () => {
    vi.spyOn(actions, 'toBookmarksAction');
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<PlaceCardInfo offersProp={mockOffer} />, {
      offers:
      {
        city: CITIES[0].title,
        offers: [],
        favorites: [],
        activeOfferId: 1,
        status: RequestStatus.Idle,
        sorting: Sorting.Default
      },
      user: { auth: AuthorizationStatus.Auth }
    });
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('toBookMarks'));
    expect(actions.toBookmarksAction).toBeCalled();
  });
}
);
