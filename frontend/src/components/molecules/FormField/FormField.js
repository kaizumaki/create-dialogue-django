import React, { Component } from 'react';
import styles from './FormField.scss';

class FormField extends Component {
  render() {
    return (
      <div className={styles.formField}>
        {this.props.children}
      </div>
    );
  }
}

export default FormField;
