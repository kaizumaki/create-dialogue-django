import { connect } from 'react-redux';
import Pagination from './pagination.jsx'

function mapStateToProps(state) {
  const n = state.news;
  return {
    currentPage : n.currentPage,
    totalPages: n.totalPages,
    page: 'tag',
    currentWord: n.current_tag
  };
}

export default connect(mapStateToProps)(Pagination);
