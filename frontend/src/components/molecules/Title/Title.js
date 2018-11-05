import React, { Component } from 'react';
import Label from '../../atoms/Label/Label';
import Require from '../../atoms/require/Require';

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
