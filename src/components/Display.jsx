import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'right',
        color: "white",
        height: "60px",
        backgroundColor: "#2f2f2f",
        borderRadius: "0",
    },
    display: {
        margin: "0",
        fontWeight: "normal",
        fontSize: "32px",
    }
}));

const Display = () => {
    const classes = useStyles();
    const state = useSelector(state => state.calculator)
    const displayValue = state.display
    const calculationDisplayValue = state.calulationDisplay
    let displayMarginTop = "10px"

    function setCalculationDisplay() {
        if (calculationDisplayValue) {
            displayMarginTop = "0px";

            return <div style={{ fontSize: "16px", marginBottom: "10px" }}
                className={classes.display}>
                {calculationDisplayValue}
            </div>
        }
        return null;
    }

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {setCalculationDisplay()}
                    <div className={classes.display} style={{ marginTop: displayMarginTop }}>{displayValue}</div>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default Display;
