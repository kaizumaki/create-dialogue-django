import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.scss';

class Textarea extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        id={this.props.label}
        value={this.props.value}
        rows={this.props.rows || 5}
        placeholder={this.props.placeholder}
        required={this.props.isRequired}
        onChange={this.props.onChange}
        className={styles.textareaField} />
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any
};

export default Textarea;
