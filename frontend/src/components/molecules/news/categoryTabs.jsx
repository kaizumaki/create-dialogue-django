import React, { Component } from 'react';
import styles from './categoryTabs.scss';

class CategoryTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newsCategory = this.props.categories.map((item, index) =>
      <li
        key={index}
        className={this.props.current === item ? styles.current : styles.tabItem}
        onClick={() => this.props.action(item)}>
        {item}
      </li>
    );

    return (
      <ul className={styles.tabList}>
        {newsCategory}
      </ul>
    );
  }
}

export default CategoryTabs;
