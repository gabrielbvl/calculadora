import styled from "styled-components";

export const ContainerMaster = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #101010;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  overflow: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #101010;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: #ffffff;
  width: 80%;
  max-width: 380px;
  min-width: 310px;
  min-height: 350px;
  padding: 10px;
`;
