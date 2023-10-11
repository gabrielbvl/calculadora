import { ButtonContainer } from "./styled";

const Button = ({label, onClick, backgroundColor}) => {
    return (
      <ButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;