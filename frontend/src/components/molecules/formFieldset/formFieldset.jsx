import React, { Component } from 'react';
import styles from './formFieldset.scss';

class FormFieldset extends Component {
  render() {
    return (
      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default FormFieldset;
