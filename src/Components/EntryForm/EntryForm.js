import React from 'react';

export default function EntryForm({ entry, setEntry, handleSubmit }) {
  return (
    <div>
      <form>
        <h3>Enter A Entry</h3>
        <div className="form-control">
          <label>Entry: </label>
          <input
            className="control"
            type="text"
            placeholder="entry"
            value={entry}
            onChange={(e) => {
              console.log(setEntry);
              setEntry(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
