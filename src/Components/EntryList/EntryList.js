import React from 'react';
import { useState } from 'react';
import createEntry from '../../services/entry';
import EntryForm from '../../Components/EntryForm/EntryForm';

export default function EntryList() {
  const [entry, setEntry] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createEntry(entry);
      alert('You added an Entry!');
    } catch {
      alert('Something went wrong!');
    }
    setEntry('');
  };

  return (
    <div>
      <h1> Add a Entry!</h1>
      <EntryForm entry={entry} handleSubmit={handleSubmit} />
    </div>
  );
}
