import { FooterContainer } from "./styles";

const Footer = () => {
  const githubLink = "https://github.com/gabrielbvl";
  const linkedinLink = "https://www.linkedin.com/in/gabrielbvl";
  const repositoryLink = "https://github.com/gabrielbvl/calculadora";

  return (
    <FooterContainer>
      <h2>Informações Importantes</h2>
      <ul>
        <li>
          Sinta-se a vontade para dar sugestões e fazer criticas construtivas
          sobre o projeto.
        </li>
        <li>
          Entre em contato via{" "}
          <a target="blank" href={githubLink}>
            Github
          </a>{" "}
          ou{" "}
          <a target="blank" href={linkedinLink}>
            LinkedIn
          </a>{" "}
          :D
        </li>
        <li>Projeto em desenvolvimento por Gabriel Bezerra.</li>
        <li>
          <a target="blank" href={repositoryLink}>
            Acesse o repositório
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
