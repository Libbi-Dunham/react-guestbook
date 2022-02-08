import React from 'react';
import { useState } from 'react';

export default function EntryForm() {
  const [user, setUser] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(user);
  };

  return (
    <div>
      <form>
        <h3>Enter A Entry</h3>
        <div className="form-control">
          <label>Name: </label>
          <input
            className="control"
            type="text"
            placeholder="name"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <label>Entry: </label>
        <input
          className="user"
          type="text"
          placeholder="entry"
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
          }}
        />
        <div>
          <button className="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
