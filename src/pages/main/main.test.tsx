import { render, screen } from '@testing-library/react';
import Main from './main';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';
import { RequestStatus } from '../../const';

describe('Page: Mains', () => {

  it('should render correctly', () => {
    const mockOffers = mockStore.offers.offers;
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Main offersProps={mockOffers} status={RequestStatus.Success} />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    expect(screen.getByTestId('mainPage')).toBeInTheDocument();
  });
}
);
