import React, { Component } from 'react';
import styles from './FormItem.scss';
import Title from '../Title/Title';

class FormItem extends Component {
  render() {
    return (
      <div className={styles.formItem} data-gridlex="grid-noGutter-equalHeight">
        <div data-gridlex="col-12_xs-3">
          <div className={styles.title}>
            <Title label={this.props.label} text={this.props.titleText} isRequired={this.props.isRequired} />
          </div>
        </div>
        <div data-gridlex="col-12_xs-9">
          <div className={styles.formElement}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default FormItem;
