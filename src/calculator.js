import React, { useState } from 'react';
import './Calculator.css'; // Optional: Style your calculator here

const Calculator = () => {
  const [display, setDisplay] = useState(''); // Stores the current input
  const [result, setResult] = useState(null); // Stores the final result

  const handleButtonClick = (value) => {
    // Handle operator and number buttons
    if (value === 'C') {
      setDisplay('');       // Clear the display
      setResult(null);       // Clear the result
    } else if (value === '=') {
      try {
        const evalResult = eval(display);  // Calculate the result
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setDisplay(display + value); // Update display with clicked button
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {result !== null ? result : display || "0"}
      </div>
      <div className="buttons">
        {/* Number buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number.toString())}>
            {number}
          </button>
        ))}
        
        {/* Operator buttons */}
        {['+', '-', '*', '/'].map((operator) => (
          <button key={operator} onClick={() => handleButtonClick(operator)}>
            {operator}
          </button>
        ))}

        {/* Special buttons */}
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
