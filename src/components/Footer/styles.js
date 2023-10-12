import styled from "styled-components";

export const FooterContainer = styled.h3`
  color: white;
  font-size: 24px;
  text-align: center;
  width: 80%;
  min-height: 40vh;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid blueviolet;
  padding: 10px;
  transition: 2s;

  h1 {
    margin-bottom: 20px;
  }

  ul {
  }

  li {
    margin-bottom: 15px;
    text-align: left;
  }

  @media (max-width: 1100px) {
    font-size: 18px;
    transition: 2s;
  }

  @media (max-width: 810px) {
    font-size: 14px;
    transition: 2s;
  }
`;
