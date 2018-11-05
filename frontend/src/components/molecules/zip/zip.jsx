import React, { Component } from 'react';
import styles from './zip.scss';
import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import Attention from '../../atoms/attention/attention.jsx';

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


