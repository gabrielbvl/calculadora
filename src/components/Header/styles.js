import styled from "styled-components";

export const HeaderContainer = styled.h3`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 10px 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 162, 255, 1),
    rgba(0, 76, 120, 1)
  );
  margin-bottom: 40px;

  color: rgba(255, 255, 255, 1);
`;

export const LogoNameLeft = styled.div`
  // background-color: red;
  display: flex;
  align-items: center;
  height: 100%;
  width: 15%;
`;

export const PageNameCenter = styled.div`
  //  background-color: green;
  display: flex;
  align-items: center;
  height: 100%;
  width: 60%;

  ul {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }

  li {
    list-style: none;
  }
`;

export const SandwichMenuRight = styled.div`
  // background-color: blue;
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
`;
