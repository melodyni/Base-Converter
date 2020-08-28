import React from 'react';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 200 };
  }
  render() {
    return <div>{this.state.value}</div>;
  }
}

export default BaseConverter;
