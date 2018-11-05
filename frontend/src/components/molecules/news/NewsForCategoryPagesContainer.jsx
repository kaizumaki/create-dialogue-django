import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActionCreators from 'actions/news';
import NewsForCategoryPages from './newsForCategoryPages.jsx'

function mapStateToProps(state) {
  const n = state.news;
  return {
    news : n.news,
    isLoading: n.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsForCategoryPages);
