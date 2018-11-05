import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sliderActionCreators from 'actions/slider';
import Slider from './slider.jsx'
function mapStateToProps(state) {
  const sl = state.slider;
  return {
    index  : sl.index,
    length : sl.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sliderActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
