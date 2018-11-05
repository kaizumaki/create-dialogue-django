import React, { Component } from 'react';
import styles from './sending.scss';
import SendingImg from 'babel-loader!react-svg-loader!./sending.svg';

class Sending extends Component {
  render() {
    return (
      <div className={styles.sending}>
        <div className={styles.messageWrap}>
          <SendingImg width={100} height={100} />
          <br />
          <span className={styles.animation}>送信中...</span>
        </div>
      </div>
    );
  }
}

export default Sending;
