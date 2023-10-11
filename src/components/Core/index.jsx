import { Row } from "./styled"
import Button from "../Button"
import { ReactComponent as BackspaceIcon } from "../../assets/backspace_white_24dp.svg";

const Core = ({currentNumber, setCurrentNumber, firstNumber, setFirstNumber, operation, setOperation, inputInProgress, setInputInProgress, decimalEntered, setDecimalEntered}) => {

    const handleAddNumber = (character) => {
        if (character === ',' && decimalEntered) {
          return;
        } else if (character === ',') {
            setDecimalEntered(true);
        } else if (!inputInProgress) {
            setCurrentNumber(character);
            setInputInProgress(true);
        } else {
            setCurrentNumber(`${currentNumber}${character}`);
        } 
        console.log("currentNumber", currentNumber)
        console.log("character", character)
      }

  const handleOnClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setOperation('');
    setInputInProgress(false);
    setDecimalEntered(false);
  }

  const handleBackspace = () => {
    if (currentNumber !== 0) {
      const updatedNumber = currentNumber.toString().slice(0, -1);
      setCurrentNumber(updatedNumber || 0);
    }
  };

    const handleDecimal = () => {
    if (!decimalEntered) {
      setCurrentNumber(currentNumber + ',');
      setDecimalEntered(true);
      handleAddNumber(',')
    }
  };

  const handleSumNumbers = () => {
    if (operation === '') {
      setFirstNumber(currentNumber);
      setOperation('+');
      setInputInProgress(false);
    } else {
      const result = firstNumber + currentNumber;
      setCurrentNumber(result);
      setOperation('');
      setInputInProgress(false);
    }
      setDecimalEntered(false);
      
  }
  
  const handleSubNumbers = () => {
    if (operation === '') {
      setFirstNumber(currentNumber);
      setOperation('-');
      setInputInProgress(false);
    } else {
      const result = firstNumber - currentNumber;
      setCurrentNumber(result);
      setOperation('');
      setInputInProgress(false);
      setDecimalEntered(false);
    }
  }
  
  const handleMultNumbers = () => {
    if (operation === '') {
      setFirstNumber(currentNumber);
      setOperation('x');
      setInputInProgress(false);
    } else {
      const result = firstNumber * currentNumber;
      setCurrentNumber(result);
      setOperation('');
      setInputInProgress(false);
      setDecimalEntered(false);
    }
  }
  
  const handleDivisionNumbers = () => {
    if (operation === '') {
      setFirstNumber(currentNumber);
      setOperation('/');
      setInputInProgress(false);
    } else {
      const result = firstNumber / currentNumber;
      setCurrentNumber(result);
      setOperation('');
      setInputInProgress(false);
      setDecimalEntered(false);
    }
  }

  const handlePercentNumbers = () => {
    if (operation === '') {
      const result = (currentNumber / 100);
      setCurrentNumber(result);
    } else {
      const result = firstNumber * (currentNumber / 100);
      setCurrentNumber(result);
    }
    setInputInProgress(false);
    setDecimalEntered(false);
  }

  const handleEquals = () => {
    if(firstNumber !== 0 && operation !== '' && currentNumber !== 0){
      switch(operation){
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleSubNumbers()
          break;
          case 'x':
          handleMultNumbers()
          break;
          case '/':
          handleDivisionNumbers()
          break;
          case '%':
          handlePercentNumbers()
          break;
          default:
          break;
      }
    }
  }

  return (
    <div>
        <Row>
            {inputInProgress ? (
                <Button label="%" onClick={handlePercentNumbers} />
            ) : (
                <Button label="%" disabled={true} />
            )}
            <Button label="CE" onClick={handleOnClear}/>
            <Button label={<BackspaceIcon/>} onClick={handleBackspace} />
            <Button label="/" onClick={handleDivisionNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber(7)}/>
            <Button label="8" onClick={() => handleAddNumber(8)}/>
            <Button label="9" onClick={() => handleAddNumber(9)}/>
            <Button label="x" onClick={handleMultNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber(4)}/>
            <Button label="5" onClick={() => handleAddNumber(5)}/>
            <Button label="6" onClick={() => handleAddNumber(6)}/>
            <Button label="-" onClick={handleSubNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber(1)}/>
            <Button label="2" onClick={() => handleAddNumber(2)}/>
            <Button label="3" onClick={() => handleAddNumber(3)}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="." />
            <Button label="0" onClick={() => handleAddNumber(0)}/>
            <Button label="," onClick={handleDecimal}/>
            <Button label="=" onClick={handleEquals} backgroundColor="#120088"/>
          </Row>
    </div>
  )
}

export default Core