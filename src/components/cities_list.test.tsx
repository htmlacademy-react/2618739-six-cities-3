import { render, screen } from '@testing-library/react';
import CitiesList from './cities_list';
import { withStore, mockStore } from '../mock/mock-component';

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<CitiesList />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });
}
);
