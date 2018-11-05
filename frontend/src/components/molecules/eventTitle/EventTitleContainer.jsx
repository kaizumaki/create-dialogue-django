import { connect } from 'react-redux';
import EventTitle from './eventTitle.jsx'
function mapStateToProps(state) {
  const ev = state.event;
  return {
    title       : ev.title,
    isValid     : ev.isValid,
    isShowError : ev.isShowError,
    errorCode   : ev.errorCode,
    errorMsg    : ev.errorMsg
  };
}

export default connect(mapStateToProps)(EventTitle);
