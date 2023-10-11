import Input from "./components/Input";
import { Container, Content } from "./styles";
import Core from "./components/Core";
import { useState } from "react";


const App = () => {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');
  const [inputInProgress, setInputInProgress] = useState(false);
  const [operationClicked, setOperationClicked] = useState(false);
  const [decimalEntered, setDecimalEntered] = useState(false);

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Core 
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
        firstNumber={firstNumber}
        setFirstNumber={setFirstNumber}
        operation={operation}
        setOperation={setOperation}
        inputInProgress={inputInProgress}
        setInputInProgress={setInputInProgress}
        operationClicked={operationClicked}
        setOperationClicked={setOperationClicked}
        decimalEntered={decimalEntered}
        setDecimalEntered={setDecimalEntered}
        />  
      </Content>
    </Container>
  );
}

export default App;
