import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
        src={'https://image.tmdb.org/t/p/original/' + poster_path}
        alt={title}
      />
    </CardMedia>
    <CardTitle title={title} subtitle={'Release Date: ' + release_date} />
    <CardText>{overview}</CardText>
    <CardActions>
      <FlatButton label="Favorite" />
    </CardActions>
  </Card>
);

export default MovieCard;
