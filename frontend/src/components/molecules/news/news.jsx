import React, { Component } from 'react';
import NewsByCategory from './newsByCategory.jsx';
import CategoryTabs from './categoryTabs.jsx';

class News extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.initNews();
  }

  render() {
    return (
      <div>
        <CategoryTabs
          categories={this.props.categories}
          current={this.props.current_category}
          action={this.props.actions.selectNewsCategory} />
        <NewsByCategory
          list={this.props.display_news}
          current={this.props.current_category} />
      </div>
    );
  }
}

export default News;
