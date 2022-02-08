import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './Context/UserContext';
import { EntryProvider } from './Context/EntryContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
