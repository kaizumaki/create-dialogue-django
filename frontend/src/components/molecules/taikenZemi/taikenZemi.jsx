import React, { Component } from 'react';
import FormFieldset from '../formFieldset/formFieldset.jsx';
import TaikenZemiDateContainer from './TaikenZemiDateContainer.jsx';

export default class TaikenZemi extends Component {
  render() {
    return (
      <FormFieldset legend={this.props.zemi.title}>
        <TaikenZemiDateContainer
          value={this.props.zemi.value}
          taikenZemiActions={this.props.actions} />
      </FormFieldset>
    );
  }
}
