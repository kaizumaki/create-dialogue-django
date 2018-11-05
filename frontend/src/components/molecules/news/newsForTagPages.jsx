import React, { Component } from 'react';
import NewsArticle from './newsArticle.jsx';
import Loading from '../../atoms/loading/loading.jsx';

export default class NewsForTagPages extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.initNewsTagPages();
  }

  render() {
    const articles = this.props.news.map((item, index) =>
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
      <div>
        <Loading isLoading={this.props.isLoading} />
        <div data-gridlex="grid-equalHeight">
          {articles}
        </div>
      </div>
    );
  }
}
