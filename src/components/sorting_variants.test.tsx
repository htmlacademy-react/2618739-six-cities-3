import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import SortingVariants from './sorting_variants';

describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<SortingVariants />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });
}
);
