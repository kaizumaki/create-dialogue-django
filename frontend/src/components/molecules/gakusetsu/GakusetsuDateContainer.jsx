import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as eventDateActionCreators from 'actions/fetch_event_date';
import GakusetsuDate from './gakusetsuDate.jsx'

function mapStateToProps(state) {
  return {
    gakusetsu_date: state.fetch_event_date.gakusetsu_date
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventDateActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GakusetsuDate);
