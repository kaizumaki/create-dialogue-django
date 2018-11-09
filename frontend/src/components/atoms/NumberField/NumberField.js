import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NumberField.scss';

class NumberField extends Component {
  render() {
    return (
      <input
        type="number"
        name={this.props.name}
        id={this.props.label}
        placeholder={this.props.placeholder}
        value={this.props.value || 0}
        step={this.props.step || 1}
        required={this.props.isRequired}
        autoComplete={this.props.autocomplete || 'off'}
        maxLength={this.props.maxLength}
        onChange={this.props.onChange}
        className={styles.inputField} />
    );
  }
}

NumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  autocomplete: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func
};

export default NumberField;
