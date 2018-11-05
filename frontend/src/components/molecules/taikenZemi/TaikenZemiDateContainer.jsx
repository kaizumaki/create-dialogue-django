import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as eventDateActionCreators from 'actions/fetch_event_date';
import TaikenZemiDate from './taikenZemiDate.jsx'

function mapStateToProps(state) {
  return {
    taiken_zemi_date: state.fetch_event_date.taiken_zemi_date
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventDateActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaikenZemiDate);
