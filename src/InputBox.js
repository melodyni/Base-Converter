import React from 'react';

const InputBox = ({ base, value, onChange }) => {
  return (
    <label>
      {`Base: ${base} `}
      <input
        className='input-box'
        base={base}
        value={value.toString(base)}
        onChange={(event) => onChange(event.target.value, base)}
      ></input>
    </label>
  );
};

export default InputBox;
