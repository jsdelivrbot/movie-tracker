import React, { Component } from 'react';

import { Wrapper, Title, CardList } from './HomeStyles';
import MovieCard from '../MovieCard/MovieCard';

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchRecentMovies();
  }

  hasPhoto = ({ poster_path }) => poster_path;

  renderMovieCards = (movie) => <MovieCard key={movie.id} {...movie} />;

  isEmpty = (recentMovies) => recentMovies.length === 0;

  render() {
    const { recentMovies } = this.props;

    if (this.isEmpty(recentMovies)) return <div>Loading</div>;

    return (
      <Wrapper>
        <Title>Popular Recent Movies</Title>
        <CardList>
          {recentMovies
            .filter(this.hasPhoto)
            .map((movie) => this.renderMovieCards(movie))}
        </CardList>
      </Wrapper>
    );
  }
}
