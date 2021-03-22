let defaultState = {
    display: "0",
    previousDisplay: "0",
    calulationDisplay: "",
    operatorClicked: false,
    ongoingOperator: ""
};

const calculatorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_DISPLAY":
            return {
                ...state,
                display: action.display
            }
        case "CHANGE_CALCULATION_DISPLAY":
            return {
                ...state,
                calulationDisplay: action.calculationDisplay
            }
        case "PLUS":
            return {
                ...state,
                ongoingOperator: "+"
            }
        case "CALCULATE":
            return {
                ...state,
                display: action.display,
                calulationDisplay: action.calculationDisplay,
                previousDisplay: action.previousDisplay,
                ongoingOperator: action.ongoingOperator
            }
        case "SET_ONGOING_OPERATOR":
            return {
                ...state,
                ongoingOperator: action.ongoingOperator
            }
        case "SET_OPERATOR_CLICKED":
            return {
                ...state,
                operatorClicked: action.operatorClicked
            }
        case "ALL_CLEAR":
            return {
                display: "0",
                previousDisplay: "0",
                calulationDisplay: "",
                operatorClicked: false,
                ongoingOperator: ""
            }
        default: return state;
    };
};

export default calculatorReducer;