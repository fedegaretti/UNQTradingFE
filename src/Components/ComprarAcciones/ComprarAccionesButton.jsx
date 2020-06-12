import React, {useState} from 'react';
import { Dialog, Button, DialogTitle, DialogContent} from '@material-ui/core';
import OrdenDeVentaCompraForm from './ComprarAccionesForm'

export default function OrdenDeVentaButton() {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const body = (<OrdenDeVentaCompraForm/>)

    return (
        <div className="container justify-content-center mt-2">
           <Button variant= "contained" color="primary" onClick={handleShow}>
                 Comprar
             </Button>
             <Dialog 
                color= "primary"
                open={show}
                onClose={handleClose}>
                <DialogTitle id="form-dialog-title">Comprar Acciones</DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </div>
    )
}



