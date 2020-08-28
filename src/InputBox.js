import React from 'react';

const InputBox = ({ base, value, onChange }) => {
  return (
    <label>
      {`Base: ${base}`}
      <input
        base={base}
        value={value}
        onChange={(event) => onChange(event.target.value, base)}
      ></input>
    </label>
  );
};

export default InputBox;
