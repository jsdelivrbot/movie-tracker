import React from 'react';
import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { imgStyles, StyledHeart } from './MovieCardStyles';

const MovieCard = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average
}) => (
  <Card>
    <CardMedia>
      <img
        style={imgStyles}
        src={'https://image.tmdb.org/t/p/original/' + poster_path}
        alt={title}
      />
    </CardMedia>
    <CardHeader
      actAsExpander={true}
      showExpandableButton={true}
      title={title}
      subtitle={'Release Date: ' + release_date}
    />
    <StyledHeart size={45} />
    <CardText expandable={true}>{overview}</CardText>
  </Card>
);

export default MovieCard;
