import { InputContainer } from "./styled";

const Input = ({ value }) => {
  const formattedValue = new Intl.NumberFormat("pt-BR").format(value);

  return (
    <InputContainer>
      <input disabled value={formattedValue} />
    </InputContainer>
  );
};

export default Input;
