import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../Context/EntryContext';
import { useUser } from '../../Context/UserContext';
import { useHistory } from 'react-router-dom';

export default function EntryForm() {
  const [userText, setUserText] = useState('');
  const [entryText, setEntryText] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(userText);
    setEntries([...entries, { entry: entryText, user: userText }]);
    history.push('/entries');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <textarea
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
