import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './radio.scss';

class Radio extends Component {
  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value || ''}
          required={this.props.isRequired}
          checked={this.props.isChecked}
          disabled={this.props.isDisabled}
          onChange={this.props.onChange}
          className={styles.radio} />
          <span className={styles.label}>{this.props.text}</span>
      </label>
    );
  }
}

Radio.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default Radio;
