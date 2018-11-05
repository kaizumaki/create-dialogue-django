import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.scss';

class Checkbox extends Component {
  render() {
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
          <span className={styles.label}>{this.props.text}</span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
