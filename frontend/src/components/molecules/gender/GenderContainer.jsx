import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as genderActionCreators from 'actions/gender';
import Gender from './gender.jsx'

function mapStateToProps(state) {
  const g = state.gender;
  return {
    title      : g.title,
    genderList : g.genderList,
    value      : g.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(genderActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gender);
