import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  a {
    text-decoration: none;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  cursor: pointer;
`;

export const CartTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;

  span {
    color: #363636;
  }

  span:nth-child(1) {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 6px;
  }

  span:nth-child(2) {
    font-weight: 500;
    font-size: 15px;
  }
`;
