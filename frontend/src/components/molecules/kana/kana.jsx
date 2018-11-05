import React, { Component } from 'react';

import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class Kana extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <Field
          type="text"
          label={this.props.label}
          placeholder="例：りっし&emsp;たろう"
          value={this.props.value}
          maxLength={50}
          onChange={(e) => this.props.actions.inputKana(e.target.value)} />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

