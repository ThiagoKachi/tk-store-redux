import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 16px 0;
  padding: 16px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  -webkit-box-shadow: 3px 4px 14px -3px rgba(168, 168, 168, 1);
  -moz-box-shadow: 3px 4px 14px -3px rgba(168, 168, 168, 1);
  box-shadow: 3px 4px 14px -3px rgba(168, 168, 168, 1);

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
  }

  svg {
    margin: 24px 16px 0 0;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #666774;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px 0 0 16px;

  span:nth-child(1) {
    font-size: 24px;
    font-weight: 600;
    color: #4b4d63;
    margin-bottom: 16px;
  }

  span:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    color: #696969;
    margin-bottom: 16px;
  }

  span:nth-child(3) {
    font-size: 18px;
    font-weight: 500;
    color: #3cb371;
    margin-top: 16px;
  }
`;
