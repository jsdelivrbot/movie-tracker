import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Title, CardList } from './HomeStyles';
import MovieCard from '../MovieCard/MovieCard';
import { recentMovies } from './data';
import { getUserId } from '../../reducers/auth';
import { getAllFavorites } from '../../actions/favorites';

class Home extends Component {
  componentDidMount() {
    const { fetchRecentMovies, getAllFavorites, user_id } = this.props;
    fetchRecentMovies();
    getAllFavorites(user_id);
  }

  renderMovieCards = (recentMovies) =>
    recentMovies
      .filter(this.hasPhoto)
      .map((movie) => this.renderMovieCard(movie));

  hasPhoto = ({ poster_path }) => poster_path;

  renderMovieCard = (movie) => <MovieCard key={movie.id} {...movie} />;

  isEmpty = (recentMovies) => recentMovies.length === 0;

  render() {
    // const { recentMovies } = this.props;

    if (this.isEmpty(recentMovies)) return <div>Loading</div>;

    return (
      <Wrapper>
        <Title>Popular Recent Movies</Title>
        <CardList>{this.renderMovieCards(recentMovies)}</CardList>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  user_id: getUserId(state)
});

export default connect(mapStateToProps, { getAllFavorites })(Home);
