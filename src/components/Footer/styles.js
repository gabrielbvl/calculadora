import styled from "styled-components";

export const FooterContainer = styled.h3`
  color: white;
  text-align: center;
  width: 70%;
  height: auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid dodgerblue;
  padding: 10px;
  transition: 2s;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 20px;
    font-size: 3vw;

    @media (min-width: 2000px) {
      font-size: 60px;
    }
  }

  ul {
  }

  li {
    margin-bottom: 15px;
    text-align: justify;
    font-weight: 500;
    font-size: 1.8vw;

    @media (min-width: 1400px) {
      font-size: 25px;
    }

    a {
      color: white;
    }
  }
`;
