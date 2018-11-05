import React, { Component } from 'react';
import styles from './newsByCategory.scss';
import NewsArticle from './newsArticle.jsx';

class NewsByCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articles = this.props.list.map((item, index) =>
      <div
        key={index}
        data-gridlex="col-12_sm-4_md-3">
        <NewsArticle
          slug={item.slug}
          imgPath={item._featured_media.source_url}
          text={item.title.rendered}
          date={item.date}
          tagItems={item._tags} />
      </div>
    );

    return (
      <div className={styles.articlesWrap}>
        <div data-gridlex="grid-equalHeight">
          {articles}
        </div>
        <div className="align-right">
          <a href={'/news/category/' + this.props.current}>
            {this.props.current}のニュースをもっと見る
          </a>
        </div>
      </div>
    );
  }
}

export default NewsByCategory;
