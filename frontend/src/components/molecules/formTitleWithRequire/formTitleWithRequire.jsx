import React, { Component } from 'react';
import styles from './formTitleWithRequire.scss';
import Require from '../../atoms/require/Require.js';
import FormTitle from '../../atoms/formTitle/formTitle.jsx';

class FormTitleWithRequire extends Component {
  render() {
    return (
      <div className={styles.formTitle}>
        <FormTitle text={this.props.text} />
        {this.props.isRequired && <Require />}
      </div>
    );
  }
}

export default FormTitleWithRequire;
