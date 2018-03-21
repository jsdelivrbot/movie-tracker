import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { imgStyles, StyledHeart } from './MovieCardStyles';
import {
  addFavorite,
  deleteFavorite,
  getFavorites
} from '../../actions/favorites';
import { getAuthStatus, getUserId } from '../../reducers/auth';

class MovieCard extends Component {
  handleClick = () => {
    const { isAuthenticated } = this.props;
    isAuthenticated ? this.updateFavorites() : this.renderModal();
  };

  updateFavorites = () => {
    const movie_id = this.props.id;
    this.isFavorited()
      ? addFavorite({ ...this.props, movie_id })
      : deleteFavorite({ ...this.props, movie_id });
  };

  isFavorited = () => {
    return true;
  };

  renderModal = () => <div>Hi, my name is Modal</div>;

  render() {
    const {
      id,
      title,
      overview,
      poster_path,
      release_date,
      vote_average
    } = this.props;
    const src = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const subtitle = `Release Date: ${release_date}`;

    return (
      <Card>
        <CardMedia>
          <img style={imgStyles} src={src} alt={title} />
        </CardMedia>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
          title={title}
          subtitle={subtitle}
        />
        <StyledHeart onClick={this.handleClick} size={45} />
        <CardText expandable={true}>{overview}</CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state),
  user_id: getUserId(state)
});

export default connect(mapStateToProps, { addFavorite, deleteFavorite })(
  MovieCard
);
