import React, { Component } from 'react';
import styles from './steps.scss';
import Step from '../../atoms/step/step.jsx';

export default class Steps extends Component {
  render() {
    const stepsItems = this.props.steps.map((item, index) =>
      <li key={index} className={item ? styles[item] : styles.stepsItem} data-gridlex="col">
        <Step text={this.props.text[index]} state={item} />
      </li>
    );

    return (
      <ol className={styles.steps} data-gridlex="grid-noGutter">
        {stepsItems}
      </ol>
    );
  }
}

