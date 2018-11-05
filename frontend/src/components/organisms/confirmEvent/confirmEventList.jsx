import React, { Component } from 'react';
import styles from './confirmEventList.scss';
import BreakLine from '../../atoms/breakLine/breakLine.jsx';

export default class ConfirmEventList extends Component {
  render() {
    return (
      <dl className={styles.confirmList} data-gridlex="grid-noGutter-equalHeight">
        {this.props.items.reduce((acc, item, index) => {
          return acc.concat([
            <dt key={`t-${index}`} className={styles.confirmItem} data-gridlex="col-12_xs-3">
              <div className={styles.confirmElementTitle}>{item.title}</div>
            </dt>,
            <dd key={`v-${index}`} className={styles.confirmItem} data-gridlex="col-12_xs-9">
              <div className={styles.confirmElement}>{item.value}</div>
            </dd>
          ]);
        }, [])}
        {this.props.contact.value && <dt className={styles.confirmItem} data-gridlex="col-12_xs-3"><div className={styles.confirmElementTitle}>{this.props.contact.title}</div></dt>}
        {this.props.contact.value && <dd className={styles.confirmItem} data-gridlex="col-12_xs-9"><div className={styles.confirmElement}><BreakLine text={this.props.contact.value} /></div></dd>}
      </dl>
    );
  }
}
