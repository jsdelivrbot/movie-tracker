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

const ROOT_IMG_URL = 'https://image.tmdb.org/t/p/original/';

class MovieCard extends Component {
  handleClick = () => {
    const { isAuthenticated } = this.props;
    isAuthenticated ? this.updateFavorites() : this.renderModal();
  };

  updateFavorites = () => {
    const movie_id = this.props.id;
    const new_poster_path = `${ROOT_IMG_URL}${this.props.poster_path}`;
    const { user_id } = this.props;

    this.isFavorited()
      ? deleteFavorite({ ...this.props, movie_id })
      : addFavorite({ ...this.props, movie_id, poster_path: new_poster_path });
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
    const src = `${ROOT_IMG_URL}${poster_path}`;
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
