import React, { Component } from 'react';
import styles from './tel.scss';
import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class Tel extends Component {
  render() {
    const markList = this.props.marks.map((item, index) =>
      <Marks key={index} text={item} />
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div className={styles.field}>
          <Field
            type="tel"
            label={this.props.label}
            placeholder="例：0356081033"
            value={this.props.value}
            autocomplete="tel"
            onChange={(e) => this.props.actions.inputTel(e.target.value)}
            isRequired={this.props.isRequired} />
        </div>
        {this.props.isRequired && <ValidateIcon isValid={this.props.isValid} />}
        <Marks text="半角数字・ハイフンなし" />
        {markList}
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}


