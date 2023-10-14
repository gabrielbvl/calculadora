import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Slackside+One&display=swap');
</style>;

export const HistoricContainer = styled.div`
  width: 30%;
  max-width: 500px;
  height: 450px;
  margin-left: 20px;
  background-color: #303030;
  color: ivory;
  padding: 10px;
  font-size: 22px;
  font-family: "Slackside One", cursive;

  overflow: auto;

  @media (max-width: 768px) {
    width: 50%;
    min-width: 310px;
    margin-left: 0;
    margin-top: 20px;
    min-height: 50px;
    max-height: 100px;
  }
`;

export const PrincipalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const HistoricContent = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 2px;
  border-bottom: 1px solid #1e90ff;
  width: 98%;

  #numberOfOperation {
    color: #1e90ff;
    font-size: 26px;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-right: 10px;

    svg {
      margin-left: 10px;
      width: 30px;
    }
  }
`;
