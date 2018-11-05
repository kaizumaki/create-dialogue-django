import React, { Component } from 'react';
import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class Building extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <Field
          type="text"
          label={this.props.label}
          placeholder="例：立志コーポ101号室"
          value={this.props.value}
          maxLength={100}
          onChange={(e) => this.props.actions.inputBuilding(e.target.value)}
          isRequired={this.props.isRequired} />
        <Marks text="建物名、部屋番号などがあれば忘れずに入力してください。" />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

