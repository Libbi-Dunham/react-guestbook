import React from 'react';
import { useState } from 'react';
import EntryForm from '../../Components/EntryForm/EntryForm';
// import { useEntries } from '../../Context/EntryContext';

export default function EntryList() {
  //current user making an entry
  const [entry, setEntry] = useState('');
  // state that I am updating
  // const { entries } = useEntries();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <h1> Guest Book</h1>

      <EntryForm entry={entry} setEntry={setEntry} />
    </div>
  );
}
