import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

import { evaluateExpression } from '../utils/evaluateExpression';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [isResultShown, setIsResultShown] = useState<boolean>(false);

    const handleClick = (label: string) => {
        if (label === "=") {
            calculateResult();
        } else if (label === "Clear") {
            clearInput();
        } else {
            if (!isResultShown) {
                setInput(input + label);
            }
        }
    };

    const calculateResult = () => {
        const calculatedResult = evaluateExpression(input);

        if (typeof calculatedResult === "number") {
            setResult(calculatedResult.toString());
            setInput(calculatedResult.toString());
        } else {
            setResult("Error");
        }

        setIsResultShown(true); // Indicar que se mostró un resultado
    };

    const clearInput = () => {
        setInput('');
        setResult('');
        setIsResultShown(false); // Reiniciar el indicador de resultado
    };

    return (
        <div className="calculator bg-white p-6 rounded shadow-lg">
            <Display value={result || input || "0"} />
            <div className="grid grid-cols-4 gap-4 mt-4 mb-2">
                {["7", "8", "9", "/"].map(label => <Button key={label} label={label} onClick={handleClick} />)}
                {["4", "5", "6", "*"].map(label => <Button key={label} label={label} onClick={handleClick} />)}
                {["1", "2", "3", "-"].map(label => <Button key={label} label={label} onClick={handleClick} />)}
                {["0", ".", "=", "+"].map(label => <Button key={label} label={label} onClick={handleClick} />)}
            </div>
                <Button label={isResultShown ? "Clear Data" : "Clear"} onClick={clearInput} />
        </div>
    );
};

export default Calculator;
