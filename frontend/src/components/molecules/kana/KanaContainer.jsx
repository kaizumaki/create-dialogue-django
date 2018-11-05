import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as nameActionCreators from 'actions/name';
import Kana from './kana.jsx'

function mapStateToProps(state) {
  const n = state.name;
  return {
    title       : n.title_kana,
    value       : n.kana,
    isValid     : n.isValidKana,
    isShowError : n.isShowError,
    errorCode   : n.errorCodeKana,
    errorMsg    : n.errorMsg,
    label       : encodeURI(n.title_kana)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nameActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Kana);
