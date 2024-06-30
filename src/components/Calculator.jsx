import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const calculateResult = (input) =>{

try {
  const operators = ['+','-','*','/'];
  let operator = null;

  for (let index = 0; index < input.length; index++) {
   if(operators.includes(input[index]))
    {
      operator = input[index];
      break;
    }
  }

  if(!operator)
    {
      setDisplay(parseFloat(display).toString());
      return;
    }
  const [operand1,operand2] = input.split(operator).map(parseFloat);
  let result;

  switch(operator)
  {
    case '+':
      result = operand1 + operand2;
      break;
      case '-':
        result = operand1 - operand2;
        break;
        case '*':
          result = operand1 * operand2;
          break;
          case '/':
      result = operand1 / operand2;
      break;
      default:
        throw new Error("invalid operator")
  }


  setDisplay(result.toFixed(1).toString());

} catch (error) {
  console.log(error);
      setDisplay('Error');
}
  }

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay(display.slice(0, -1));
    } else if (value === 'AC') {
      setDisplay('0');
    } else if (value === '=') {
      calculateResult(display);
    } else {
      setDisplay((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-3xl font-bold mb-6 text-orange-400">Calculator</h1>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <h1 className="text-3xl font-bold text-right mb-4 bg-gray-700 text-white p-2 rounded">{display}</h1>
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('C')}>C</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('AC')}>AC</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('%')}>%</button>
        <button className="bg-orange-500 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('/')}>/</button>

        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('7')}>7</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('8')}>8</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('9')}>9</button>
        <button className="bg-orange-500 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('*')}>*</button>

        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('4')}>4</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('5')}>5</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('6')}>6</button>
        <button className="bg-orange-500 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('-')}>-</button>

        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('1')}>1</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('2')}>2</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('3')}>3</button>
        <button className="bg-orange-500 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('+')}>+</button>

        <button className="bg-gray-700 text-white font-bold py-2 rounded col-span-2" onClick={() => handleButtonClick('0')}>0</button>
        <button className="bg-gray-700 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('00')}>00</button>
        <button className="bg-orange-600 text-white font-bold py-2 rounded" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  </div>
  );
};

export default Calculator;
