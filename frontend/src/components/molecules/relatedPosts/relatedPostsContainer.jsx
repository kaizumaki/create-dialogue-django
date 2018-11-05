import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as relatedPostActionCreators from 'actions/relatedPost.js'
import RelatedPosts from './relatedPosts.jsx'

function mapStateToProps(state) {
  return {
    list:state.relatedPost.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(relatedPostActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPosts);
