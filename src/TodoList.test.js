import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

it('renders No task found when the list is empty', () => {
  render(<TodoList />);
  const linkElement = screen.getByText(/No mask found/i);
  expect(linkElement).toBeInTheDocument();
});