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
  const displayEntry = user ? `Welcome ${user}` : 'Write A Entry!';
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{displayEntry}</h3>
        <div className="form-control">
          <label>Name: </label>
          {!user ? (
            <input
              className="name"
              type="text"
              placeholder="name"
              value={userText}
              onChange={(e) => {
                setUserText(e.target.value);
              }}
            />
          ) : (
            <button onClick={() => setUser('')}>{`${user}?`}</button>
          )}
        </div>
        <br></br>
        <label>Entry: </label>
        <input
          className="entry"
          type="text"
          placeholder="entry"
          value={entryText}
          onChange={(e) => {
            setEntryText(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <div>
          <input className="button" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
