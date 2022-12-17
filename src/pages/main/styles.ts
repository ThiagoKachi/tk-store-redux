import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 42px 120px;

  background-color: whitesmoke;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 1500px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 920px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 650px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
