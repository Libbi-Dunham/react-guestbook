import React from 'react';
import './EntryList.css';
import { useEntries } from '../../Context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entries">
      {entries.map(({ entry, user }) => {
        return <div className="div" key={`${entry}`}>{`${entry} ${user}`}</div>;
      })}
    </div>
  );
}
