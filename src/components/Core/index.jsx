import { Row } from "./styled";
import Button from "../Button";
import { ReactComponent as BackspaceIcon } from "../../assets/backspace_white_24dp.svg";
import { FaReact } from "react-icons/fa";

const Core = ({
  currentNumber,
  setCurrentNumber,
  firstNumber,
  setFirstNumber,
  operation,
  setOperation,
  inputInProgress,
  setInputInProgress,
  decimalEntered,
  setDecimalEntered,
  history,
  setHistory,
  operationClicked,
  setOperationClicked,
}) => {
  const handleAddNumber = (character) => {
    if (character === "." && decimalEntered) {
      return;
    } else if (character === ".") {
      setDecimalEntered(true);
    }
    if (!inputInProgress) {
      setCurrentNumber(character);
      setInputInProgress(true);
      setOperationClicked(false);
    } else {
      setCurrentNumber(`${currentNumber}${character}`);
    }
  };

  const handleOperation = (operator) => {
    if (operation === "") {
      setFirstNumber(currentNumber);
      setOperation(operator);
      setInputInProgress(false);
      setDecimalEntered(false);
      setOperationClicked(true);
    } else {
      if (currentNumber) {
        let result;
        switch (operation) {
          case "+":
            result = parseFloat(firstNumber) + parseFloat(currentNumber);
            break;
          case "-":
            result = parseFloat(firstNumber) - parseFloat(currentNumber);
            break;
          case "x":
            result = parseFloat(firstNumber) * parseFloat(currentNumber);
            break;
          case "/":
            result = parseFloat(firstNumber) / parseFloat(currentNumber);
            break;
          case "%":
            result =
              (parseFloat(firstNumber) * parseFloat(currentNumber)) / 100;
            break;
          default:
            break;
        }
        const operationString = `${firstNumber} ${operation} ${currentNumber} = ${result}`;
        setHistory([...history, operationString]);
        setCurrentNumber(result.toString());
        setFirstNumber(0);
        setOperation(operator);
        setInputInProgress(false);
        setDecimalEntered(false);
        setOperationClicked(true);
      }
    }
  };

  const handleOnClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setOperation("");
    setInputInProgress(false);
    setDecimalEntered(false);
  };

  const handleAllClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setOperation("");
    setInputInProgress(false);
    setDecimalEntered(false);
    setHistory([]);
  };

  const handleBackspace = () => {
    if (currentNumber !== 0) {
      const updatedNumber = currentNumber.toString().slice(0, -1);
      setCurrentNumber(updatedNumber || 0);
    }
  };

  const handleDecimal = () => {
    if (!decimalEntered) {
      setCurrentNumber(`${currentNumber}.`);
      setDecimalEntered(true);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== 0 && operation !== "" && currentNumber !== 0) {
      let result;
      switch (operation) {
        case "+":
          result = parseFloat(firstNumber) + parseFloat(currentNumber);
          break;
        case "-":
          result = parseFloat(firstNumber) - parseFloat(currentNumber);
          break;
        case "x":
          result = parseFloat(firstNumber) * parseFloat(currentNumber);
          break;
        case "/":
          result = parseFloat(firstNumber) / parseFloat(currentNumber);
          break;
        case "%":
          result = (parseFloat(firstNumber) * parseFloat(currentNumber)) / 100;
          break;
        default:
          break;
      }
      const operationString = `${firstNumber} ${operation} ${currentNumber} = ${result}`;
      setHistory([...history, operationString]);
      setCurrentNumber(result.toString());
      setFirstNumber(0);
      setOperation("");
      setInputInProgress(false);
      setDecimalEntered(false);
      setOperationClicked(false);
    }
  };

  return (
    <div>
      <Row>
        <Button label="CE" onClick={handleAllClear} />
        <Button label="C" onClick={handleOnClear} />
        <Button label={<BackspaceIcon />} onClick={handleBackspace} />
        <Button
          label="/"
          onClick={() => {
            if (!operationClicked) handleOperation("/");
          }}
        />
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber(7)} />
        <Button label="8" onClick={() => handleAddNumber(8)} />
        <Button label="9" onClick={() => handleAddNumber(9)} />
        <Button
          label="x"
          onClick={() => {
            if (!operationClicked) handleOperation("x");
          }}
        />
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber(4)} />
        <Button label="5" onClick={() => handleAddNumber(5)} />
        <Button label="6" onClick={() => handleAddNumber(6)} />
        <Button
          label="-"
          onClick={() => {
            if (!operationClicked) handleOperation("-");
          }}
        />
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber(1)} />
        <Button label="2" onClick={() => handleAddNumber(2)} />
        <Button label="3" onClick={() => handleAddNumber(3)} />
        <Button
          label="+"
          onClick={() => {
            if (!operationClicked) handleOperation("+");
          }}
        />
      </Row>
      <Row>
        <Button label={<FaReact />} />
        <Button label="0" onClick={() => handleAddNumber(0)} />
        <Button label="," onClick={handleDecimal} />
        <Button
          label="="
          onClick={() => {
            if (!operationClicked) handleEquals();
          }}
          backgroundColor="#120088"
        />
      </Row>
    </div>
  );
};

export default Core;
