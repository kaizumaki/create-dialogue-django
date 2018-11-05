import React, { Component } from 'react';
import styles from './zip.scss';
import FormItem from '../FormItem/FormItem.js';
import Field from '../../atoms/Field/Field.js';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon.js';
import Marks from '../../atoms/Marks/Marks.js';
import Attention from '../../atoms/Attention/Attention.js';

export default class Zip extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div className={styles.field}>
          <Field
            type="text"
            label={this.props.label}
            placeholder="例：0000000"
            value={this.props.value}
            autocomplete="postal-code"
            maxLength={7}
            onChange={(e) => this.props.actions.inputZip(e.target.value)}
            isRequired={this.props.isRequired} />
        </div>
        {this.props.isRequired && <ValidateIcon isValid={this.props.isValid} />}
        <Marks text="半角数字・ハイフンなし" />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}


