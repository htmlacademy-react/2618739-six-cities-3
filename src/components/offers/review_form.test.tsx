import { render, screen } from '@testing-library/react';
import ReviewsForm from './review_form';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';
import userEvent from '@testing-library/user-event';
import * as actions from '../../store/api-actions';

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
    vi.spyOn(actions, "putReviewsAction");
    const preparedComponent = (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ReviewsForm />} />
        </Routes>
      </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    const reviewText = "Good place to stay"
    await userEvent.type(
      screen.getByTestId("review_text"),
      reviewText,
    );
    expect(screen.getByTestId('reviewForm')).toBeInTheDocument();
    expect(screen.getByDisplayValue(reviewText)).toBeInTheDocument();
    await userEvent.click(screen.getByText("Submit"));
    expect(actions.putReviewsAction).toBeCalled();
  });
}
);
