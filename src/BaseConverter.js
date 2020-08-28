import React from 'react';
import InputBox from './InputBox.js';
import './baseConverter.css';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, base) {
    let newValue = value === '' ? value : parseInt(value, base);
    if (!isNaN(newValue)) {
      this.setState({ value: newValue });
    }
  }

  render() {
    const inputBoxes = this.props.bases.map((base) => (
      <InputBox
        base={base}
        key={base}
        onChange={this.handleChange}
        value={this.state.value}
      />
    ));
    return <div className='flex'>{inputBoxes}</div>;
  }
}

export default BaseConverter;
