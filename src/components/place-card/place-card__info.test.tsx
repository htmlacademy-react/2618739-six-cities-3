import { render, screen } from '@testing-library/react';
import PlaceCardInfo from './place-card__info';
import { fetchMockOffer } from '../../mock/offers';
import { mockStore, withStore } from '../../mock/mock-component';
import userEvent from '@testing-library/user-event';
import * as actions from '../../store/api-actions';

describe('Component: PlaceCardInfo', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<PlaceCardInfo offersProp={mockStore.offers.activeOffer} />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText(mockStore.offers.activeOffer.title)).toBeInTheDocument();
  });
  it('should put offer to bookmarks by click on a button', async () => {
    vi.spyOn(actions, 'toBookmarksAction');
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<PlaceCardInfo offersProp={mockOffer} />, mockStore);
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('toBookMarks'));
    expect(actions.toBookmarksAction).toBeCalled();
  });
}
);
