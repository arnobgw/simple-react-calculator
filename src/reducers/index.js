import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";

const allReducers = combineReducers({
    calculator: calculatorReducer
});

export default allReducers;