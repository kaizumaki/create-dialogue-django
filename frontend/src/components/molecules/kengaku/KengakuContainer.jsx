import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as kengakuActionCreators from 'actions/kengaku';
import Kengaku from './kengaku.jsx'

function mapStateToProps(state) {
  return {
    ken: state.kengaku
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(kengakuActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Kengaku);
