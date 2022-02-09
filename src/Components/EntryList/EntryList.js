import React from 'react';
import { useEntries } from '../../Context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <h1>Guest Book</h1>
      {entries.map(({ entry, user }) => {
        return <div key={`${entry}`}>{`${entry} ${user}`}</div>;
      })}
    </div>
  );
}
