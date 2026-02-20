import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banner name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Justin Chow/i);
  expect(nameElement).toBeInTheDocument();
});
