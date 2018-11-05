import { connect } from 'react-redux';
import Pagination from './pagination.jsx'

function mapStateToProps(state) {
  const n = state.news;
  return {
    currentPage : n.currentPage,
    totalPages: n.totalPages,
    page: 'category',
    currentWord: n.current_category
  };
}

export default connect(mapStateToProps)(Pagination);
