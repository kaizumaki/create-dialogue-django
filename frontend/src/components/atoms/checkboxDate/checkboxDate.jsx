import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './checkboxDate.scss';
import koyomi from 'koyomi';

class CheckboxDate extends Component {
  render() {
    const date = koyomi.format(this.props.date, 'M月D日');
    const dayOfWeek = koyomi.format(this.props.date, 'ff>1');

    return (
      <label>
        <input
          type="checkbox"
          name={this.props.name}
          value={this.props.value || ''}
          required={this.props.isRequired}
          checked={this.props.isChecked}
          disabled={this.props.isDisabled}
          onChange={this.props.onChange}
          className={styles.checkbox} />
          <time className={styles.label} dateTime={this.props.date}>
            {date}(<span className={dayOfWeek === '日' || dayOfWeek === '祝' ? styles.red : dayOfWeek === '土' ? styles.blue : ''}>{dayOfWeek}</span>)
          </time>
      </label>
    );
  }
}

CheckboxDate.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  isRequired: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxDate;
