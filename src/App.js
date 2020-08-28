import React from 'react';
import BaseConverter from './BaseConverter.js';
import './baseConverter.css';

const App = () => {
  return (
    <div className='center'>
      <h1>{`Base Converter`}</h1>
      <BaseConverter
        bases={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
      />
    </div>
  );
};

export default App;
