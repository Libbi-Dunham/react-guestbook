import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { useState } from 'react';

export default function Auth() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLogin = () => {
    setUser('example');
    const { from } = location.state || { from: { pathname: '/' } };
    history.push(from.pathname);
    // if (email === process.env.REACT_APP_AUTH_USERNAME) setUser {{ email }}
  };
  return (
    <form>
      <h2>Auth</h2>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <button type="button" onClick={handleLogin}>
        Enter
      </button>
    </form>
  );
}
