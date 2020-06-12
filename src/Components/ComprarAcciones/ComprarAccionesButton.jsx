import React, { useState } from 'react';
import { Dialog, Button, DialogTitle, DialogContent, Paper, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ComprarAccionesForm from './ComprarAccionesForm'
import Draggable from 'react-draggable';

export default function ComprarAccionesButton(props) {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    // hardcodeada la orden, cuando se implementa con la lista se pasa por props
    const body = (<ComprarAccionesForm ordenId={1} />)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleShow}>
                Comprar
            </Button>
            <Dialog
                color="primary"
                open={show}
                onClose={handleClose}
                PaperComponent={PaperDraggable}>
                <DialogTitle disableTypography style={{
                    cursor: 'move', display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center'
                }} id="draggable-dialog-title">
                    <h3>Comprar Acciones</h3>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </div>
    );
}

function PaperDraggable(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}
