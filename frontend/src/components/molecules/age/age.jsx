import React, { Component } from 'react';

import styles from './age.scss';
import FormItem from '../FormItem/FormItem.js';
import Field from '../../atoms/Field/Field.js';
import Attention from '../../atoms/Attention/Attention.js';

export default class Age extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <div className={styles.ageField}>
          <Field
            type="text"
            label={this.props.label}
            value={this.props.value}
            maxLength={2}
            onChange={(e) => this.props.actions.inputAge(e.target.value)} />
        </div>歳
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

