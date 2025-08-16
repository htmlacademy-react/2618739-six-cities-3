import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import Header from './header';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<Header />, mockStore);
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={withStoreComponent} />
        </Routes>
      </MemoryRouter>);
    render(preparedComponent);
    expect(screen.getByText(mockStore.user.info.email)).toBeInTheDocument();
  });
}
);
