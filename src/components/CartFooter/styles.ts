import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: sticky;
  bottom: 0;
  padding: 16px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 16px 24px;
  font-size: 18px;
  color: white;
  background-color: #7b68ee;
  border: none;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const TotalInfos = styled.div`
  margin: 16px 16px 0 0;

  span:nth-child(1) {
    font-size: 18px;
    color: #c0c0c0;
    font-weight: 500;
  }

  span:nth-child(2) {
    font-size: 24px;
    color: #4b4d63;
    font-weight: 600;
  }
`;
