import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonRow from './ButtonRow'
import Display from './Display';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        userSelect: "none"
    },
    grid: {
        width: "350px",
        textAlign: "center"
    }
}));

const Calculator = () => {
    const classes = useStyles();
    const [displayValue, setDisplayValue] = React.useState("0")
    const [calculationDisplayValue, setCalculationDisplayValue] = React.useState("")
    const calcButton = [
        {
            value: ["AC", "MOD", "DEL", "/"]
        },
        {
            value: ["7", "8", "9", "*"]
        },
        {
            value: ["4", "5", "6", "-"]
        },
        {
            value: ["1", "2", "3", "+"]
        },
        {
            value: [".", "0", "%", "="]
        }
    ]

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container spacing={0}>
                <Display />
                {
                    calcButton.map((item, index) => {
                        return <Grid key={index} container item xs={12} spacing={0}>
                            <ButtonRow
                                calcButtons={item} />
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
}

export default Calculator;