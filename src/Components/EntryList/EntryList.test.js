import { render, screen } from '@testing-library/react';
import App from '../../App';
import { EntryProvider } from '../../Context/EntryContext';
import { UserProvider } from '../../Context/UserContext';

test.skip('renders the header', async () => {
  render(
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  );
  const header = await screen.findByText(/Guest Book/i);
  expect(header).toBeInTheDocument();
});
