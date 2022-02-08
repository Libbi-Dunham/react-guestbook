import React from 'react';
import { useState } from 'react';
import EntryForm from '../../Components/EntryForm/EntryForm';

export default function EntryList() {
  const [entry, setEntry] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1> Guest Book</h1>

      <EntryForm entry={entry} setEntry={setEntry} handleSubmit={handleSubmit} />
    </div>
  );
}
