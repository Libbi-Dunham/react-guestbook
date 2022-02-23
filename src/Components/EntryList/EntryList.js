import React from 'react';
import './EntryList.css';
import '../../App.css';
import { useEntries } from '../../Context/EntryContext';
import { useHistory } from 'react-router-dom';

export default function EntryList() {
  const { entries } = useEntries();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div className="entries">
      <h3 className="Entries"> Your Entries!</h3>
      {entries.map(({ entry, user }) => {
        return <div className="div" key={`${entry}`}>{`${entry} ${user}`}</div>;
      })}
      <div>
        <button className="button" onClick={handleSubmit}>
          Logout
        </button>
      </div>
    </div>
  );
}
