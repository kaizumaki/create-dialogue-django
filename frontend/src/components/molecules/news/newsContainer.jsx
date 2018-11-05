import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActionCreators from 'actions/news';
import News from './news.jsx';

function mapStateToProps(state) {
  const n = state.news;
  return {
    categories       : n.categories,
    display_news     : n.display_news,
    current_category : n.current_category
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
