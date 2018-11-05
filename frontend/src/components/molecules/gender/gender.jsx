import React, { Component } from 'react';
import styles from './gender.scss';
import FormItem from '../FormItem/FormItem.js';
import Radio from '../../atoms/radio/radio.jsx';

export default class Gender extends Component {
  render() {
    const genderItems = this.props.genderList.map((item, index) =>
      <li key={index} data-gridlex="col-12_xs-6">
        <Radio
          name="gender"
          text={item}
          value={item}
          isChecked={this.props.value === item}
          onChange={() => this.props.actions.inputGender(item)} />
      </li>
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <ul className={styles.radioList} data-gridlex="grid-noGutter">
          {genderItems}
        </ul>
      </FormItem>
    );
  }
}

