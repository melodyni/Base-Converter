import React, { useState } from 'react';
import InputBox from './InputBox.js';
import './baseConverter.css';

const BaseConverter = (props) => {
  const [state, setValue] = useState({ value: 0 });
  const inputBoxes = props.bases.map((base) => (
    <InputBox
      base={base}
      key={base}
      onChange={(value) => setValue({ value })}
      value={state.value}
    />
  ));
  return <div className='flex'>{inputBoxes}</div>;
};

export default BaseConverter;
