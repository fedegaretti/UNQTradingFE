import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import OrdenDeVentaForm from './OrdenDeVentaForm';
import { Dialog, Button, DialogTitle, DialogContent, IconButton } from '@material-ui/core';
import {PaperDraggable} from "../MaterialDesign/PaperDraggable.jsx"
import CloseIcon from '@material-ui/icons/Close';
import NavigationBar from "../NavigationBar/NavigationBar";

export default function OrdenesDeVenta(props)  {

    const usuario = !!props.location.state ? props.location.state.usuario : props.history.push("/LoginEmpresa");
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false)
      window.location.reload(false)
    };
    
    const content = () => {
        console.log(props)
        return (
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <OrdenesDeVentaTable empresa={usuario}/>
                        <Button className="mt-2 mb-5" variant = "contained" color="primary" onClick={() => setShow(true)}>
                            Cargar nueva
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
                <NavigationBar
                    name={"Ordenes de Venta"}
                    isUser={false}
                    content={content()}
                    usuario={usuario}
                />
                <Dialog
                    color="primary"
                    open={show}
                    onClose={handleClose}
                    PaperComponent={PaperDraggable}>
                    <DialogTitle disableTypography style={{
                        cursor: 'move', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center'
                    }} id="draggable-dialog-title">
                        <h3>Nueva orden de venta</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                    <OrdenDeVentaForm usuario={usuario} empresa={props.location.state ? props.location.state.empresa : ''}/>
                    </DialogContent>
                </Dialog>
            </div>
            );
}
