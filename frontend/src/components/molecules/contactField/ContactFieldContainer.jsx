import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActionCreators from 'actions/contact';
import ContactField from './contactField.jsx'

function mapStateToProps(state) {
  const c = state.contact;
  return {
    title       : c.title,
    value       : c.value,
    needReply   : c.needReply,
    replyTo     : c.replyTo,
    replyToList : c.replyToList,
    replyToTitle: c.replyToTitle,
    isRequired  : c.isRequired,
    isValid     : c.isValid,
    isShowError : c.isShowError,
    errorCode   : c.errorCode,
    errorMsg    : c.errorMsg,
    label       : encodeURI(c.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactField);
