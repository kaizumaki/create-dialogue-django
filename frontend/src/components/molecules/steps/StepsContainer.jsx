import { connect } from 'react-redux';
import Steps from './steps.jsx'

function mapStateToProps(state) {
  const s = state.steps;
  return {
    steps : s.steps,
    text  : s.text
  };
}

export default connect(mapStateToProps)(Steps);
