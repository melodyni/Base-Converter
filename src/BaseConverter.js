import React from 'react';
import Input from './Input.js';
class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 200 };
  }
  render() {
    // return <div>{this.state.value}</div>;
    return <Input value={this.state.value} />;
  }
}

export default BaseConverter;
