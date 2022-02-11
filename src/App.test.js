import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { EntryProvider } from './Context/EntryContext';
import { UserProvider } from './Context/UserContext';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

test('renders the actions', () => {
  render(
    <MemoryRouter>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </MemoryRouter>
  );
  const button = screen.getByRole('button', { name: /Save/i });
  const entryInput = screen.getByPlaceholderText('entry');
  const nameInput = screen.getByPlaceholderText('name');
  userEvent.type(entryInput, 'hello');
  userEvent.type(nameInput, 'libbi');
  userEvent.click(button);
  const entry = screen.getByText(/hello libbi/i);
  expect(entry).toBeInTheDocument();
  const button3 = screen.getByRole('button', { name: /Back/i });
  userEvent.click(button3);
  const displayMessage = screen.getByText(/Welcome libbi/i);
  expect(displayMessage).toBeInTheDocument();

  const button2 = screen.getByRole('button', { name: /libbi?/i });
  expect(button2).toBeInTheDocument();
  userEvent.click(button2);
});
