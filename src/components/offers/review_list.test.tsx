import { render, screen } from '@testing-library/react';
import ReviewsList from './review_list';
import { mockReview } from '../../mock/reviews';

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    render(<ReviewsList
      reviewList={[mockReview]} />);
    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
  });
}
);


