import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 2rem;
  margin-top: 3rem;
  text-align: center;
`;

export const CardList = styled.div`
  display: grid;
  grid-gap: 8rem;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(3, 1fr);
  margin-top: 6rem;
`;
