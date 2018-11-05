import React, { Component } from 'react';
import FormFieldset from '../formFieldset/formFieldset.jsx';
import GakusetsuDateContainer from './GakusetsuDateContainer.jsx';

export default class Gakusetsu extends Component {
  render() {
    return (
      <FormFieldset legend={this.props.gaku.title}>
        <GakusetsuDateContainer
          value={this.props.gaku.value}
          gakusetsuActions={this.props.actions} />
      </FormFieldset>
    );
  }
}

