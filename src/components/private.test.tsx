import { render, screen } from '@testing-library/react';
import { withStore } from '../mock/mock-component';
import Private from './private';
import { mockUser } from '../mock/user';
import { AuthorizationStatus, RequestStatus } from '../const';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Component: Private', () => {
  it('should render correctly with authorized user', () => {
    const childComponent = <div>Child</div>;
    const userInfo = mockUser();
    const { withStoreComponent } = withStore(<Private>{childComponent}</Private>, {
      user: {
        auth: AuthorizationStatus.Auth, status: RequestStatus.Idle, info: userInfo
      },
    });
    render(withStoreComponent);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
  it('should render correctly with authorization status unknown', () => {
    const childComponent = <div>Child</div>;
    const userInfo = mockUser();
    const { withStoreComponent } = withStore(<Private>{childComponent}</Private>, {
      user: {
        auth: AuthorizationStatus.Unknown, status: RequestStatus.Idle, info: userInfo
      },
    });
    render(withStoreComponent);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it('should render correctly with unauthorized user', () => {
    const childComponent = <div>Child</div>;
    const userInfo = mockUser();
    const { withStoreComponent } = withStore(<Private>{childComponent}</Private>, {
      user: {
        auth: AuthorizationStatus.NoAuth, status: RequestStatus.Idle, info: userInfo
      },
    });
    const loginPage = <div>Sign in</div>;
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={withStoreComponent} />
          <Route path="/login" element={loginPage} />
        </Routes>
      </MemoryRouter>);
    render(preparedComponent);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
}
);
