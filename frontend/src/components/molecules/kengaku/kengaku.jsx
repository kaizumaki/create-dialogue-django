import React, { Component } from 'react';
import FormFieldset from '../formFieldset/formFieldset.jsx';
import KengakuDate from './kengakuDate.jsx';

export default class Kengaku extends Component {
  render() {
    return (
      <FormFieldset legend={this.props.ken.title}>
        <KengakuDate
          ken={this.props.ken}
          actions={this.props.actions} />
      </FormFieldset>
    );
  }
}

