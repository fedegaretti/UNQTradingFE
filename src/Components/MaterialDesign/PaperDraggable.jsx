import Draggable from 'react-draggable';
import { Paper } from '@material-ui/core';
import React from 'react';

export function PaperDraggable(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    )
}