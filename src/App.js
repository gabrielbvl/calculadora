import Input from "./components/Input";
import { Container, ContainerMaster, Content } from "./styles";
import Core from "./components/Core";
import { useState } from "react";
import Historic from "./components/Historic";
import Footer from "./components/Footer";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [inputInProgress, setInputInProgress] = useState(false);
  const [operationClicked, setOperationClicked] = useState(false);
  const [decimalEntered, setDecimalEntered] = useState(false);
  const [history, setHistory] = useState([]);

  return (
    <ContainerMaster>
      <Container>
        <Content>
          <Input value={currentNumber} />
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
            history={history}
            setHistory={setHistory}
          />
        </Content>
        <Historic history={history} />
      </Container>
      <Footer />
    </ContainerMaster>
  );
};

export default App;
