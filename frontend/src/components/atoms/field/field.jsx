import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './field.scss';

class Field extends Component {
  render() {
    return (
      <input
        type={this.props.type || 'text'}
        name={this.props.name}
        id={this.props.label}
        placeholder={this.props.placeholder}
        value={this.props.value || ''}
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
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  autocomplete: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func
};

export default Field;
