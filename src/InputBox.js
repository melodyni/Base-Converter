import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange, base } = this.props;
    onChange(parseInt(event.target.value, base));
  }

  render() {
    const { value, base } = this.props;
    return (
      <div>
        <label>{`Base: ${base} `}</label>
        <input
          className='input-box'
          value={isNaN(value) ? '' : value.toString(base)}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default InputBox;
