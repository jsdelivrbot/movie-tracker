import { connect } from 'react-redux';

import { fetchRecentMovies } from '../actions/recentMovies';
import { getRecentMovies } from '../reducers/recentMovies';
import Home from '../components/Home/Home';

const mapStateToProps = (state) => ({
  recentMovies: getRecentMovies(state)
});

export default connect(mapStateToProps, { fetchRecentMovies })(Home);
