import React, {useState, useEffect} from 'react';
import {comprarAcciones, findOrdenDeVenta} from '../Service/RestService'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  
export default function OrdenDeVentaCompraForm() {
    const [orden, setOrden] = useState('')
    const [alert, setAlert] = useState({show: false, variant: "danger", message: '', icon: false});
    const classes = useStyles();
    useEffect(() => {
        findOrdenDeVenta(1).then(response => setOrden(response.data))
    }, [])
    
    function comprar(ev, ordenId) {
        ev.preventDefault()
        comprarAcciones(1, ordenId)
        .then((response) => {
            setAlert({
                show: true,
                variant: "filled",
                title: "Success",
                severity: "success",
                message: "Acciones compradas correctamente!"
            })
        }).catch((error) => {
            setAlert({
                show: true,
                title:"error",
                severity: "error",
                variant: "filled",
                message: error.response.data.message
            })
        })
    }

    return (
        <div>
            <form className={classes.root}>
                <TextField
                    disabled
                    id="nombre"
                    label="Nombre Empresa"
                    value={orden.nombreEmpresa}
                    variant="outlined"/>
                    <TextField
                    disabled
                    id="cantidad"
                    label="Cantidad de Acciones"
                    value={orden.cantidadDeAcciones}
                    variant="outlined"/>
                    <TextField
                    disabled
                    id="precio"
                    label="Precio"
                    value={orden.precio}
                    variant="outlined"/>
                    <TextField
                    disabled
                    id="creacion"
                    label="Fecha de Creación"
                    value={orden.fechaDeCreacion}
                    variant="outlined"/>
                    <TextField 
                    disabled 
                    id="vencimiento" 
                    label="Fecha de Vencimiento" 
                    value={orden.fechaDeVencimiento} 
                    variant="outlined"/>
            </form>
                <div className="ml-2">
                    <Button className="mt-2" variant= "contained" color="primary" onClick={ev => comprar(ev, orden.id)}>
                        Comprar
                    </Button>
                </div>
                <Alert className= "mt-2" variant={alert.variant} severity={alert.severity} icon={alert.icon}>
                    <AlertTitle>{alert.title}</AlertTitle>
                    {alert.message}
                </Alert>
        </div>
    )
}



