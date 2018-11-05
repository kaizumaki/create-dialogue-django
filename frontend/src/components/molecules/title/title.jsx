import React, { Component } from 'react';
import Label from '../../atoms/label/label.jsx';
import Require from '../../atoms/require/require.jsx';

class Title extends Component {
  render() {
    return (
      <div>
        <Label label={this.props.label} text={this.props.text} />
        {this.props.isRequired && <Require />}
      </div>
    );
  }
}

export default Title;
