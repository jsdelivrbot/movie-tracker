import styled from 'styled-components';
import { Heart } from 'react-feather';

export const imgStyles = {
  height: '500px',
  width: '100%'
};

export const StyledHeart = styled(Heart)`
  padding-left: 1rem;
  cursor: pointer;
  fill: ${(props) => (props.isFavorited ? '#fd79a8' : 'white')};
  stroke: #fd79a8;
`;
