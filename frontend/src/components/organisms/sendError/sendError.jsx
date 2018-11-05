import React, { Component } from 'react';
import styles from './sendError.scss';

export default class SendError extends Component {
  render() {
    return (
      <div className={styles.sendError}>
        <div className={styles.messageWrap}>
          <p className="align-center">送信に失敗しました。たいへん申し訳ございませんが、入力画面にもどって再度送信をお願いいたします。</p>
          <div className="align-center">
            <a href={this.props.inputUrl}
               onClick={() => this.props.actions.setInputStep()}>
              入力画面へ
            </a>
          </div>
        </div>
      </div>
    );
  }
}
