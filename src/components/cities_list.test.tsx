import { render, screen } from '@testing-library/react';
import CitiesList from './cities_list';
import { withStore, mockStore } from '../mock/mock-component';
import userEvent from '@testing-library/user-event';
import * as redux from '../hooks/index';
import * as actions from '../store/actions';

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<CitiesList />, mockStore);
    render(withStoreComponent);
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });
  it('should set active city', async () => {
    vi.spyOn(redux, "useAppDispatch");
    vi.spyOn(actions, "setCity");
    const { withStoreComponent } = withStore(<CitiesList />, mockStore);
    render(withStoreComponent);
    await userEvent.click(screen.getByText('Amsterdam'));
    expect(redux.useAppDispatch).toBeCalled();
    expect(actions.setCity).toHaveBeenCalledWith('Amsterdam');
  });
}
);
