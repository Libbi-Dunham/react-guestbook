import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../Context/EntryContext';
import { useUser } from '../../Context/UserContext';

export default function EntryForm() {
  const [userText, setUserText] = useState('');
  const [entryText, setEntryText] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(userText);
    setEntries([...entries, { entry: entryText, user }]);
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
            value={userText}
            onChange={(e) => {
              setUserText(e.target.value);
            }}
          />
        </div>
        <label>Entry: </label>
        <input
          className="user"
          type="text"
          placeholder="entry"
          value={entryText}
          onChange={(e) => {
            setEntryText(e.target.value);
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
