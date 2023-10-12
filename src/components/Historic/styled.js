import styled from "styled-components";

export const HistoricContainer = styled.div`
  width: 30%;
  max-width: 500px;
  min-height: 450px;
  margin-left: 20px;
  background-color: #303030;
  color: white;
  padding: 10px;
  font-size: 24px;
  overflow: auto;

  @media (max-width: 768px) {
    width: 50%;
    min-width: 310px;
    margin-left: 0;
    margin-top: 100px;
  }
`;
