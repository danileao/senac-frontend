import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  margin: 10px;
  padding: 10px;

  background: ${(props) => props.isEmail && "#7159"};
`;
