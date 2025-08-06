import { render, screen } from '@testing-library/react';
import OfferContainer from './offer_container';
import { fetchMockOffer } from '../../mock/offers';
import { withStore, mockStore } from '../../mock/mock-component';
describe('Component: OfferContainer', () => {
  it('should render correctly', () => {
    const mockOffer = fetchMockOffer();
    const { withStoreComponent } = withStore(<OfferContainer offer={mockOffer} />, mockStore);
    vi.mock("react-router-dom", () => ({
      ...vi.importActual("react-router-dom"),
      Link: () => { },
      useParams: () => { return ({ id: 1 }) },
    }));
    render(withStoreComponent);
    expect(screen.getByTestId('offer_container')).toBeInTheDocument();
  });
}
);