import React from 'react';
import './EntryList.css';
import { useEntries } from '../../Context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entries">
      <h3 className="Entries"> Your Entries!</h3>
      {entries.map(({ entry, user }) => {
        return <div className="div" key={`${entry}`}>{`${entry}- ${user}`}</div>;
      })}
    </div>
  );
}
