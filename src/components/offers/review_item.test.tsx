import { render, screen } from '@testing-library/react';
import ReviewsItem from './review_item';
import { mockReview } from '../../mock/reviews';


describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    render(
      <ReviewsItem
        id={mockReview.id}
        user={mockReview.user}
        comment={mockReview.comment}
        date={mockReview.date}
        rating={mockReview.rating}
      />);
    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
  });
}
);


