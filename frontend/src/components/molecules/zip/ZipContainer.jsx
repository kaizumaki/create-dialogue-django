import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as zipActionCreators from 'actions/zip';
import Zip from './zip.jsx'

function mapStateToProps(state) {
  const z = state.zip;
  return {
    title       : z.title,
    value       : z.value,
    isValid     : z.isValid,
    isRequired  : z.isRequired,
    isShowError : z.isShowError,
    errorCode   : z.errorCode,
    errorMsg    : z.errorMsg,
    label       : encodeURI(z.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(zipActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Zip);
