import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActionCreators from 'actions/address';
import Address from './address.jsx'

function mapStateToProps(state) {
  const addr = state.address;
  return {
    title       : addr.title,
    value       : addr.value,
    isRequired  : addr.isRequired,
    marks       : addr.marks,
    isValid     : addr.isValid,
    isShowError : addr.isShowError,
    errorCode   : addr.errorCode,
    errorMsg    : addr.errorMsg,
    label       : encodeURI(addr.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Address);
