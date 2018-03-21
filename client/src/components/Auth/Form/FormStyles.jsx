import styled from 'styled-components';

import { Card } from 'material-ui/Card';

export const StyledCard = styled(Card)`
  width: 400px;
  height: ${(props) => props.theme.height};
  margin: 5rem auto 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  margin: 2rem 0;
`;

export const errorStyle = {
  position: 'absolute',
  marginBottom: '-.6rem'
};

StyledCard.defaultProps = {
  theme: {
    height: '300px'
  }
};
