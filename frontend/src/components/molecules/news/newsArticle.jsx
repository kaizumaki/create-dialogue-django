import React, { Component } from 'react';
import styles from './newsArticle.scss';

class NewsArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.tagItems.map((item, index) =>
      <div key={index} className={styles.tagWrap}>
        <a href={'/news/tag/' + item.name} className={styles.tag}>
          <i className={styles.tagIcon}>&#xf02b;</i>
          {item.name}
        </a>
      </div>
    );

    return (
      <article className={styles.article} data-gridlex="grid-column-noGutter-spaceBetween-equalHeight">
        <div className={styles.articleInner} data-gridlex="col-12">
          <a href={'/news/' + this.props.slug} className={styles.articleContentLink}>
            <div data-gridlex="grid-noGutter-middle">
              <div data-gridlex="col-4_xs-12">
                <div className={styles.articleImgWrap}>
                  <div
                    className={styles.articleImg}
                    style={{backgroundImage: 'url(' + this.props.imgPath + ')'}}>
                  </div>
                </div>
              </div>
              <div data-gridlex="col-8_xs-12">
                <div className={styles.articleContentWrap}>
                  <h3 className={styles.articleTitle}>{this.props.text}</h3>
                  <div className={styles.articleDate}>
                    <time dateTime={this.props.date}>{this.props.date.split('T')[0].replace(/-/g, '.')}</time>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {this.props.tagItems.length !== 0 && <div className={styles.articleInner} data-gridlex="col-12"><div className={styles.articleTags}>{tags}</div></div>}
      </article>
    );
  }
}

export default NewsArticle;
