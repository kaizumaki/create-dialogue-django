import React, { Component } from 'react';
import styles from './pagination.scss';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentPage = parseInt(this.props.currentPage);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const lastPage = parseInt(this.props.totalPages);
    const pageUrl = '/news/' + this.props.page + '/' + this.props.currentWord;

    return (
      <div className={styles.pagination}>
        {prevPage > 0 && <a className={styles.prev} href={pageUrl + '/' + prevPage}><i className="fas fa-angle-left" aria-hidden="true"></i></a>}
        {prevPage > 0 && <a className={styles.page} href={pageUrl}>1</a>}
        {prevPage > 2 && <span className={styles.pageNumbers}>…</span>}
        {prevPage > 1 && <a className={styles.page} href={pageUrl + '/' + prevPage}>{prevPage}</a>}
        {!isNaN(currentPage) && <span className={styles.current}>{currentPage}</span>}
        {nextPage <= lastPage - 1 && <a className={styles.page} href={pageUrl + '/' + nextPage}>{nextPage}</a>}
        {nextPage <= lastPage - 2 && <span className={styles.pageNumbers}>…</span>}
        {nextPage <= lastPage && <a className={styles.page} href={pageUrl + '/' + lastPage}>{lastPage}</a>}
        {nextPage <= lastPage && <a className={styles.next} href={pageUrl + '/' + nextPage}><i className="fas fa-angle-right" aria-hidden="true"></i></a>}
      </div>
    );
  }
}
