import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { imgStyles, StyledHeart } from './MovieCardStyles';
import { getAuthStatus } from '../../reducers/auth';

class MovieCard extends Component {
  handleClick = (id) => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      console.log('Decide whether to add or delete from favorites');
    } else {
      console.log('Show modal');
    }
  };
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
        <StyledHeart onClick={() => this.handleClick(id)} size={45} />
        <CardText expandable={true}>{overview}</CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
});

export default connect(mapStateToProps)(MovieCard);
