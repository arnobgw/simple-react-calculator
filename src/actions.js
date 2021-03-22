export function changeDisplayValue(value) {
    return {
        type: "CHANGE_DISPLAY",
        display: value
    }
}

export function allClear() {
    return {
        type: "ALL_CLEAR"
    }
}

export function changeCalculationDisplayValue(value) {
    return {
        type: "CHANGE_CALCULATION_DISPLAY",
        calculationDisplay: value
    }
}

export function plusOperator() {
    return {
        type: "PLUS"
    }
}

export function setOperatorClicked(operatorClicked) {
    return {
        type: "SET_OPERATOR_CLICKED",
        operatorClicked: operatorClicked
    }
}

export function setOngoingOperator(ongoingOperator) {
    return {
        type: "SET_ONGOING_OPERATOR",
        ongoingOperator: ongoingOperator
    }
}

export function calculate(operator, ongoingOperator, displayValue, previousDisplayValue, calculationDisplayValue) {
    let calculationDisplay = calculationDisplayValue + displayValue + " " + operator + " ";
    let calculationValue = 0;
    displayValue = parseInt(displayValue.replace(',', ''));
    previousDisplayValue = parseInt(previousDisplayValue.replace(',', ''));

    if(operator === "=") {
        calculationDisplay = "";
        operator = "";
        if(previousDisplayValue === displayValue) {
            calculationValue = displayValue;
        }            
    }

    if (ongoingOperator === "+") {
        calculationValue = previousDisplayValue + displayValue;
    }
    else if (ongoingOperator === "-") {
        calculationValue = previousDisplayValue - displayValue;
    }
    else if (ongoingOperator === "*") {
        calculationValue = previousDisplayValue * displayValue;
    }
    else if (ongoingOperator === "/") {
        calculationValue = previousDisplayValue / displayValue;
    }
    else {
        calculationValue = displayValue;
    }

    if(calculationValue % 1 !== 0)
        calculationValue = calculationValue.toFixed(5)

    return {
        type: "CALCULATE",
        display: calculationValue.toString().replace(/(.)(?=(.{3})+$)/g, "$1,"),
        calculationDisplay: calculationDisplay,
        previousDisplay: calculationValue.toString(),
        ongoingOperator: operator
    }
}
