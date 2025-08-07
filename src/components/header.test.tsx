import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<Header />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText(mockStore.user.info.email)).toBeInTheDocument();
  });
}
);
