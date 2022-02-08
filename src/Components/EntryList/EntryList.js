import React from 'react';
import { useState } from 'react';
import EntryForm from '../../Components/EntryForm/EntryForm';

export default function EntryList() {
  const [entry, setEntry] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEntry();
  };

  return (
    <div>
      <h1> Add a Entry!</h1>
      <EntryForm entry={entry} handleSubmit={handleSubmit} />
    </div>
  );
}
