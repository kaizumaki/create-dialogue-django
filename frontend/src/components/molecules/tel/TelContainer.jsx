import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as telActionCreators from 'actions/tel';
import Tel from './tel.jsx'

function mapStateToProps(state) {
  const t = state.tel;
  return {
    title       : t.title,
    value       : t.value,
    isRequired  : t.isRequired,
    marks       : t.marks,
    isValid     : t.isValid,
    isShowError : t.isShowError,
    errorCode   : t.errorCode,
    errorMsg    : t.errorMsg,
    label       : encodeURI(t.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(telActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tel);
