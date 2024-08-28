export const evaluateExpression = (expression: string): number | string => {
    try {
        const numbers = expression.split(/[-+*/]/).map(Number);
        const operators = expression.split(/\d+/).filter(op => op);

        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const nextNumber = numbers[i + 1];

            switch (operator) {
                case "+":
                    result += nextNumber;
                    break;
                case "-":
                    result -= nextNumber;
                    break;
                case "*":
                    result *= nextNumber;
                    break;
                case "/":
                    if (nextNumber === 0) return "Error"; // Evitar división por cero
                    result /= nextNumber;
                    break;
                default:
                    return "Error"; // Caso inesperado
            }
        }

        return result;
    } catch (error) {
        return "Error";
    }
};