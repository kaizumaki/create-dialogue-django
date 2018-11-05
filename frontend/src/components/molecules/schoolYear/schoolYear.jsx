import React, { Component } from 'react';
import styles from './schoolYear.scss';
import FormItem from '../formItem/formItem.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class SchoolYear extends Component {
  render() {
    const schoolYearSelect = this.props.schoolYearList.map((item, index) =>
      <option
        key={index}
        value={item}>
        {item}
      </option>
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <select
          id={this.props.label}
          value={this.props.selectedYear}
          className={styles.select}
          onChange={(e) => this.props.actions.inputSchoolYear(e.target.value)}>
          <option value="">--お選びください--</option>
          {schoolYearSelect}
        </select>
        {this.props.isRequired && <ValidateIcon isValid={this.props.isValid} />}
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

