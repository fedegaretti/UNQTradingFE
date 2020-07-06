import { DialogContentText, Typography} from '@material-ui/core';
import { properties } from "../../Properties/properties.js"
import React from 'react';
import { formStyles } from "../MaterialDesign/Styles"

export function TerminosYCondiciones(){
    const classes = formStyles();

    return (
        <DialogContentText id="scroll-dialog-description">
        <Typography component="p" className={classes.text} paragraph={false}>
            {properties.labels.terminos1}
        </Typography>
        <Typography component="p" className={classes.text} paragraph={false}>
            {properties.labels.terminos2}
        </Typography>
        <Typography component="p" className={classes.text} paragraph={false}>
            {properties.labels.terminos3}
        </Typography>
        <Typography component="p" className={classes.text} paragraph={false}>
            {properties.labels.terminos4}
        </Typography>
        <Typography component="p" className={classes.text} paragraph={false}>
            {properties.labels.terminos5}
        </Typography>
        </DialogContentText>
    )
}