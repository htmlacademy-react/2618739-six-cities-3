import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import UserInfo from './user_info';

describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<UserInfo />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText(mockStore.user.info.email)).toBeInTheDocument();
  });
}
);
