import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Field.scss';

class Field extends Component {
  render() {
    return (
      <input
        type={this.props.type || 'text'}
        name={this.props.name}
        id={this.props.label}
        placeholder={this.props.placeholder}
        value={this.props.value}
        min={this.props.min}
        step={this.props.step}
        pattern={this.props.pattern}
        required={this.props.isRequired}
        autoComplete={this.props.autocomplete || 'off'}
        maxLength={this.props.maxLength}
        onChange={this.props.onChange}
        className={styles.inputField} />
    );
  }
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  isRequired: PropTypes.bool,
  autocomplete: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func
};

export default Field;
