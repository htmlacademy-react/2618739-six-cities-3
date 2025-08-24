import { render, screen } from '@testing-library/react';
import FormRatingInput from './form_rating_input';

describe('Component: Form rating input', () => {
  it('should render correctly', () => {
    render(<FormRatingInput value={5} />);
    expect(screen.getByTestId('5-formRating')).toBeInTheDocument();
  });
}
);
