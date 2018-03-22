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
  handleClick = (props) => {
    const { isAuthenticated } = props;
    isAuthenticated ? this.updateFavorites(props) : this.renderModal();
  };

  updateFavorites = async (props) => {
    const { deleteFavorite, addFavorite } = props;
    const isFavorited = await this.checkIfIsFavorited(props);
    isFavorited ? deleteFavorite(props) : addFavorite(props);
  };

  checkIfIsFavorited = async (props) => {
    const movie_id = props.id;
    const favorites = await getFavorites(props);
    const result = favorites.some((favorite) => favorite.movie_id === movie_id);
    return result;
  };

  renderModal = () => <div>Hi, my name is Modal</div>;

  render() {
    const {
      title,
      overview,
      poster_path,
      release_date,
      vote_average
    } = this.props;
    const ROOT_IMG_URL = 'https://image.tmdb.org/t/p/original/';
    const src = `${ROOT_IMG_URL}${poster_path}`;
    const movie_id = this.props.id;
    const subtitle = `Release Date: ${release_date}`;
    const newProps = { ...this.props, movie_id, poster_path: src };

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
        <StyledHeart onClick={() => this.handleClick(newProps)} size={45} />
        <CardText expandable={true}>{overview}</CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state),
  user_id: getUserId(state)
});

export default connect(mapStateToProps, {
  addFavorite,
  deleteFavorite,
  getFavorites
})(MovieCard);
