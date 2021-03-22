import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import {
    changeDisplayValue,
    allClear,
    calculate,
    setPreviousOperator,
    clearDisplay,
    setOperatorClicked,
    changeCalculationDisplayValue,
    setOngoingOperator
} from '../actions';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#dddddd"
        },
        "&:active": {
            backgroundColor: "#b0bbba"
        },
        borderRadius: "0"
    }
}));

const ButtonRow = (props) => {
    const { calcButtons } = props;
    const classes = useStyles();
    const state = useSelector(state => state.calculator);
    const dispatch = useDispatch();
    const displayValue = state.display;
    const previousDisplayValue = state.previousDisplay;
    const calculationDisplayValue = state.calulationDisplay;
    const operatorClicked = state.operatorClicked;
    const ongoingOperator = state.ongoingOperator;
    const values = calcButtons.value;

    function handleDisplayChange(value) {
        if (!isNaN(value) || value === ".") {
            if (displayValue === "0" || operatorClicked) {
                dispatch(changeDisplayValue(value));
                dispatch(setOperatorClicked(false));
            }
            else if (displayValue.length < 21) {
                const removeComma = (displayValue + value).replace(/,/g, '');
                const displayComma = removeComma.replace(/(.)(?=(.{3})+$)/g, "$1,");
                dispatch(changeDisplayValue(displayComma));
            }
        }
        else if (value === "AC") {
            dispatch(allClear());
        }
        else if (value === "DEL") {
            if (displayValue.length < 2)
                dispatch(changeDisplayValue("0"));
            else
                dispatch(changeDisplayValue(displayValue.slice(0, -1)));
        }
        else if (value === "%") {
            changeDisplayValue("0");
        }
        else {
            if (operatorClicked && value !== "=") {
                dispatch(changeCalculationDisplayValue(calculationDisplayValue.slice(0, calculationDisplayValue.length - 2).concat(value + " ")));
                dispatch(setOngoingOperator(value));
            }
            else {
                if (value !== "=")
                    dispatch(setOperatorClicked(true));
                dispatch(calculate(value, ongoingOperator, displayValue, previousDisplayValue, calculationDisplayValue));
            }
        }
    }

    return (
        <React.Fragment>
            {
                values.map((value, index) => {
                    return <Grid key={index} item xs={3}>
                        <Paper
                            className={classes.paper}
                            onClick={() => handleDisplayChange(value)}>
                            {value}
                        </Paper>
                    </Grid>
                })
            }
        </React.Fragment>
    );
}

export default ButtonRow;