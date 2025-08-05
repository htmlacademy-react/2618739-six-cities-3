import { render, screen } from '@testing-library/react';
import Star from './star';

describe('Component: Star', () => {
  const mockRatingSetter = () => {
  };
  it('should render correctly', () => {
    render(<Star for_star='5' title_star='five' setRating={mockRatingSetter} />);
    expect(screen.getByTitle('five')).toBeInTheDocument();
  });
}
);


