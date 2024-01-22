// resuable.styled.js
import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 7px 15px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => props.bg || 'red'};
`;

export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.flex || '1'};
  gap: 30px;
  flex-direction: column;
`;

export default { Button, Container };
