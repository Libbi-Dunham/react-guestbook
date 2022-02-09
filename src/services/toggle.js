import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input className="check" type="checkbox" checked={checked} onChange={onChange} id="check" />
    <label htmlFor="check" />
  </span>
);

export default Toggle;
