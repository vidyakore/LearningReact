import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
  // const linkElement = screen.getByText('Welcome visitor');
  // expect(linkElement).toBeInTheDocument();
});
