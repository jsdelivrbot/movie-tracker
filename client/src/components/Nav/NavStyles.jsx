import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledLink = styled(Link)`
  margin-right: 2rem;
  text-decoration-color: default;
  &:hover {
    opacity: 0.7;
  }
`;
