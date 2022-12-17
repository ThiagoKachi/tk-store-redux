import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 6px;
  width: 250px;
  height: 100%;
  padding-top: 24px;

  img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #4b4d63;
  padding: 16px;
`;

export const ProductInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  span:nth-child(1) {
    color: #797d9a;
    font-weight: 600;
  }

  span:nth-child(2) {
    color: #3cb371;
    font-weight: 600;
  }
`;

export const Button = styled.div`
  width: 100%;
  text-align: center;
  background-color: #7b68ee;
  color: white;
  font-weight: 600;
  font-size: 18px;
  padding: 16px;
  margin-top: 16px;
  border-radius: 0 0 6px 6px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
