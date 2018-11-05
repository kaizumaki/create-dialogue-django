import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taikenActionCreators from 'actions/taiken_zemi';
import TaikenZemi from './taikenZemi.jsx'

function mapStateToProps(state) {
  return {
    zemi: state.taiken_zemi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taikenActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaikenZemi);
