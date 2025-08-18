import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import UserInfo from './user_info';
import userEvent from '@testing-library/user-event';
import * as token from '../services/token';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<UserInfo />, mockStore);
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={withStoreComponent} />
        </Routes>
      </MemoryRouter>);
    render(preparedComponent);
    expect(screen.getByText(mockStore.user.info.email)).toBeInTheDocument();
  });
  it('should drop token on logout', async () => {
    vi.spyOn(token, 'dropToken');
    const { withStoreComponent } = withStore(<UserInfo />, mockStore);
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={withStoreComponent} />
        </Routes>
      </MemoryRouter>);
    render(preparedComponent);
    await userEvent.click(screen.getByText('Sign out'));
    expect(token.dropToken).toBeCalled();
  });
}
);
