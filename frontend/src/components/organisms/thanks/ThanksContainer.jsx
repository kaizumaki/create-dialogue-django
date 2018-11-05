import { connect } from 'react-redux';
import Thanks from './thanks.jsx'

function mapStateToProps(state) {
  const pageName = state.steps.pageName;
  return {
    isEvent   : pageName === 'event',
    isContact : pageName === 'contact',
    isRequest : pageName === 'request'
  };
}

export default connect(mapStateToProps)(Thanks);
