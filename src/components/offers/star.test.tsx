import { render, screen } from '@testing-library/react';
import Star from './star';
import userEvent from '@testing-library/user-event';

describe('Component: Star', () => {
  const mockRatingSetter = vi.fn();
  it('should render correctly', () => {
    render(<Star for_star='5' title_star='five' setRating={mockRatingSetter} />);
    expect(screen.getByTitle('five')).toBeInTheDocument();
  });
  it('should set rating by click', async () => {
    render(<Star for_star='5' title_star='five' setRating={mockRatingSetter} />);
    await userEvent.click(screen.getByTitle('five'));
    expect(mockRatingSetter).toBeCalled();
  });
}
);


