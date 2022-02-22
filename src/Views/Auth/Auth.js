import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { useState } from 'react';

export default function Auth() {
  // const { user } = useUser();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLogin = () => {
    if (email === process.env.REACT_APP_AUTH_USERNAME) setUser({ email });
    if (password === process.env.REACT_APP_AUTH_USERNAME) setPassword({ password });

    setUser(email);
    const { from } = location.state || { from: { pathname: '/' } };
    history.push(from.pathname);
  };
  return (
    <form>
      <h1>Guest Book</h1>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="email"
      />
      <div>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
      </div>
      <button className="button" type="button" onClick={handleLogin}>
        Enter
      </button>
    </form>
  );
}
