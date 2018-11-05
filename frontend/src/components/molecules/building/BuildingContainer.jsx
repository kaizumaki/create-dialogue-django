import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActionCreators from 'actions/address';
import Building from './building.jsx';

function mapStateToProps(state) {
  const b = state.building;
  return {
    title       : b.title,
    value       : b.value,
    isValid     : b.isValid,
    isShowError : b.isShowError,
    errorCode   : b.errorCode,
    errorMsg    : b.errorMsg,
    label       : encodeURI(b.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Building);
