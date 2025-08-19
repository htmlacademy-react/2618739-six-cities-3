import { render, screen } from '@testing-library/react';
import Offer from './offer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';

describe('Page: Offer', () => {

  it('should render correctly', () => {
    const store = mockStore;
    vi.mock('react-router-dom', async () => {
      const mod = await vi.importActual('react-router-dom');
      return ({
        ...mod,
        Link: () => { },
        useParams: () => ({ id: '1' }),
      });
    });
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Offer offers={store.offers.offers} />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, store);
    render(withStoreComponent);
    expect(screen.getByText(store.offers.activeOffer.title)).toBeInTheDocument();
  });
}
);
