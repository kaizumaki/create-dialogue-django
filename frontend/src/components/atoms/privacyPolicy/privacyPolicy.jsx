import React, { Component } from 'react';
import styles from './privacyPolicy.scss';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ppBody: '',
      isError: false
    };
  }

  componentDidMount() {
    fetch('/privacy/contents',{
      }).then((response) => {
        return response.text();
      })
      .then((result) => {
        this.setState({
          ppBody: result
        });
      })
      .catch((error) => {
        this.setState({
          isError: true
        });
      });
  }

  createMarkup() {
    return {__html: '<h2>プライバシーポリシー（個人情報について）</h2>' + this.state.ppBody};
  }

  render() {
    return (
      <div>
        {this.state.isError && <a href="/privacy/" target="_blank">プライバシーポリシー（個人情報について）</a>}
        {!this.state.isError && <div className={styles.ppBlock} dangerouslySetInnerHTML={this.createMarkup()} />}
      </div>
    );
  }
}

export default PrivacyPolicy;
