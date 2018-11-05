import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gakusetsuActionCreators from 'actions/gakusetsu';
import Gakusetsu from './gakusetsu.jsx'

function mapStateToProps(state) {
  return {
    gaku: state.gakusetsu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gakusetsuActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gakusetsu);
