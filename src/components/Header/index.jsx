import {
  HeaderContainer,
  LogoNameLeft,
  PageNameCenter,
  SandwichMenuRight,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoNameLeft>
        {" "}
        <p>Gabriel Bezerra</p>
      </LogoNameLeft>
      <PageNameCenter>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </PageNameCenter>
      <SandwichMenuRight>
        <p>Modo Claro e Escuro</p> {/* TODO: Fazer botão de claro e escuro */}
      </SandwichMenuRight>
    </HeaderContainer>
  );
};

export default Header;
