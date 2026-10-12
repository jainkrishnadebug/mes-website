import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mechanical Engineering Society heading', () => {
  render(<App />);
  const headingElements = screen.getAllByText(/Mechanical Engineering Society/i);
  expect(headingElements.length).toBeGreaterThan(0);
});
