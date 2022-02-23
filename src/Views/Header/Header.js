import React from 'react';
import { useUser } from '../../Context/UserContext';

export default function Header() {
  const { user } = useUser();
  const displayEntry = user ? `Welcome ${user}` : 'Write A Entry!';
  return (
    <div>
      {user ? <p>Signing in as {user}</p> : <p>Sign In!</p>}
      <h3>{displayEntry}</h3>
    </div>
  );
}
