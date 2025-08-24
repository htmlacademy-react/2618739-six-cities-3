import { render, screen } from '@testing-library/react';
import Login from './login';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';
import userEvent from '@testing-library/user-event';
import * as actions from '../../store/api-actions';

describe('Page: Login', () => {

  it('should render correctly', () => {
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    expect(screen.getByTestId('loginForm')).toBeInTheDocument();
  });
  it('should render correctly with user input', async () => {
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    const login = 'User@mail.com';
    const password = 'Password';
    await userEvent.type(
      screen.getByTestId('email'),
      login,
    );
    await userEvent.type(
      screen.getByTestId('password'),
      password,
    );
    expect(screen.getByTestId('loginForm')).toBeInTheDocument();
    expect(screen.getByDisplayValue(login)).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeVisible();
  });

  it('should send user data by submit button', async () => {
    vi.spyOn(actions, 'login');
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    const login = 'User@mail.com';
    const password = 'Password22';
    await userEvent.type(
      screen.getByTestId('email'),
      login,
    );
    await userEvent.type(
      screen.getByTestId('password'),
      password,
    );
    await userEvent.click(screen.getByTestId('submitButton'));
    expect(actions.login).toBeCalled();
  });
}
);
