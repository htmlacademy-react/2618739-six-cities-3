import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from './404';

describe('Component: Page404', () => {
  it('should render correctly', () => {
    const preparedComponent = (<MemoryRouter>
      <Routes>
        <Route path="/" element={<Page404 />} />
      </Routes>
    </MemoryRouter>);
    render(preparedComponent);
    expect(screen.getByText('Ошибка 404. Страница не существует.')).toBeInTheDocument();
  });
}
);
