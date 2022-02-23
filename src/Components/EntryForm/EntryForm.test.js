import { render, screen } from '@testing-library/react';
import App from '../../App';
import { EntryProvider } from '../../Context/EntryContext';
import { UserProvider } from '../../Context/UserContext';

test.skip('renders the form', async () => {
  render(
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  );

  const placeholder = screen.getByPlaceholderText('name');
  const header = await screen.findByText(/Write A Entry!/i);
  expect(placeholder).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});
