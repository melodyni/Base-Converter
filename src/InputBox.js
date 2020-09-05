import React from 'react';

const InputBox = (props) => {
  const { value, base, onChange } = props;
  const handleChange = (event) => {
    onChange(parseInt(event.target.value, base));
  };

  return (
    <div>
      <label>{`Base: ${base} `}</label>
      <input
        className='input-box'
        value={isNaN(value) ? '' : value.toString(base)}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default InputBox;
