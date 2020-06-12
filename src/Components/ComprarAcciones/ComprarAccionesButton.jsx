import React, {useState} from 'react';
import { Dialog, Button, DialogTitle, DialogContent} from '@material-ui/core';
import ComprarAccionesForm from './ComprarAccionesForm'

export default function ComprarAccionesButton(props) {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    // hardcodeada la orden, cuando se implementa con la lista se pasa por props
    const body = (<ComprarAccionesForm ordenId={1}/>)

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



