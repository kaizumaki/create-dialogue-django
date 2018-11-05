import React, { Component } from 'react';
import styles from './loading.scss';
import { BeatLoader } from 'react-spinners';

class Loading extends Component {
  render() {
    const loadingArea = (
      <div className={styles.loading}>
        <span className={styles.loadingImg}>
          <BeatLoader
            color={'#cbcbcb'}
          />
        </span>
      </div>
    );

    return (
      <div>
        {this.props.isLoading && loadingArea}
      </div>
    );
  }
}

export default Loading;
