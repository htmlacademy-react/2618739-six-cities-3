import { render, screen } from '@testing-library/react';
import ReviewsForm from './review_form';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';
import userEvent from '@testing-library/user-event';
import * as actions from '../../store/api-actions';
import faker from 'faker';
import { store } from '../../store';

describe('Component: ReviewsForm', () => {

  it('should render correctly', () => {
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ReviewsForm />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    expect(screen.getByTestId('reviewForm')).toBeInTheDocument();
  });
  it('should render correctly with user input', async () => {
    vi.spyOn(actions, 'putReviewsAction');
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ReviewsForm />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    const reviewText = faker.lorem.words(20);
    await userEvent.click(
      screen.getByTestId('perfect')
    );
    await userEvent.type(
      screen.getByTestId('review_text'),
      reviewText)
    console.log();
    expect(screen.getByTestId('reviewForm')).toBeInTheDocument();
    expect(screen.getByDisplayValue(reviewText)).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeEnabled();
    await userEvent.click(screen.getByText('Submit'));
    expect(actions.putReviewsAction).toBeCalled();
  });
}
);
