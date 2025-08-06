import { render, screen } from '@testing-library/react';
import ReviewsForm from './review_form';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { withStore, mockStore } from '../../mock/mock-component';
describe('Component: ReviewsForm', () => {

  it('should render correctly', () => {
    const preparedComponent = (<MemoryRouter>
      <Routes>
        <Route path="/" element={<ReviewsForm />} />
      </Routes>
    </MemoryRouter>);
    const { withStoreComponent } = withStore(preparedComponent, mockStore);
    render(withStoreComponent);
    expect(screen.getByTestId('reviewForm')).toBeInTheDocument();
  });
}
);