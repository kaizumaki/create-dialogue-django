import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActionCreators from 'actions/news';
import NewsForTagPages from './newsForTagPages.jsx'

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

export default connect(mapStateToProps, mapDispatchToProps)(NewsForTagPages);
