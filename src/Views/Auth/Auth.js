import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { useState } from 'react';
// import { useAuth } from '../../Components/Hooks/useAuth';

export default function Auth() {
  // const { user } = useUser();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();
  // const auth = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };
  const handleLogin = () => {
    if (
      email === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser({ email: email, password: password });
      setEmail('');
      setPassword('');
      history.push(from.pathname);
    } else {
      setError('No Success!');
    }

    setUser(email);
  };
  return (
    <>
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
      {error && <h4>{error}</h4>}
    </>
  );
}
