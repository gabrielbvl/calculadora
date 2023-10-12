import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: ${(props) => props.backgroundColor || "#404040"};
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  flex: 1;

  &:hover {
    opacity: 0.6;
  }
`;
