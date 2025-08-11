import { render, screen } from '@testing-library/react';
import { withStore, mockStore } from '../mock/mock-component';
import SortingVariants from './sorting_variants';
import userEvent from '@testing-library/user-event';
import * as actions from '../store/actions';

describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<SortingVariants />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });
  it('should render correctly with user selection', async () => {
    vi.spyOn(actions, 'setSorting');
    const { withStoreComponent } = withStore(<SortingVariants />, mockStore);
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('sorting'));
    //await userEvent.click(screen.getByText('Price: high to low',));
    expect(screen.getByText('Top rated first')).toBeInTheDocument();
    expect(screen.getByText('Price: high to low')).toBeInTheDocument();
    expect(screen.getByText('Price: low to high',)).toBeInTheDocument();
    await userEvent.click(screen.getByText('Price: high to low'));
    expect(actions.setSorting).toHaveBeenCalledWith('Price: high to low');

  });
}
);
