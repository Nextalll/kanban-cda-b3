import { render, screen } from '@testing-library/react';
import Kanban from './Kanban';

test('Le composant Kanban se rend sans planter', () => {
  render(<Kanban />);
  expect(screen.getByText(/Kanban/i)).toBeInTheDocument();
});