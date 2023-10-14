import styled from "styled-components";

export const GlobalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerMaster = styled.div`
  width: 100%;
  background-color: #101010;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  background-color: #101010;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  background-color: #ffffff;
  width: 80%;
  width: 330px;
  min-height: 350px;
  padding: 10px;

  @media (max-width: 360px) {
    width: 310px;
    transition: 2s;
  }
`;

export const ContentH1 = styled.div`
  font-size: 3.3vw;
  text-align: center;
  color: #1e90ff;
  padding: 20px;

  @media (min-width: 990px) {
    font-size: 33px;
    transition: 1s;
  }
`;
