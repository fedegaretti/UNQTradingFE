import React, { useState } from 'react';
import { Dialog, Button, DialogTitle, DialogContent, Paper, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ComprarAccionesForm from './ComprarAccionesForm'
import {properties} from "../../Properties/properties.js"
import {PaperDraggable} from "../MaterialDesign/PaperDraggable.jsx"

export default function ComprarAccionesButton(props) {
    const [show, setShow] = useState(false);
    // hardcodeada la orden y el usuario, cuando se implementa con la lista se pasa por props
    const body = (<ComprarAccionesForm ordenId={1} usuarioId={1} />)

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setShow(true)}>
                {properties.labels.comprar}
            </Button>
            <Dialog
                color="primary"
                open={show}
                onClose={() => setShow(false)}
                PaperComponent={PaperDraggable}>
                <DialogTitle disableTypography style={{
                    cursor: 'move', display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center'
                }} id="draggable-dialog-title">
                    <h3>{properties.labels.comprarAcciones}</h3>
                    <IconButton onClick={() => setShow(false)}>
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


