import React, {useState} from 'react';
import { RestService } from '../../Service/RestService'
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { properties } from "../../Properties/properties.js"
import { formStyles } from "../MaterialDesign/Styles"
import { TerminosYCondiciones } from "../Common/TerminosYCondiciones.jsx";

export default function OrdenDeVentaForm(props) {

    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [accept, setAccept] = useState(false)
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState({ show: false, variant: "danger", message: '', icon: false });
    const classes = formStyles();
    const usuario = JSON.parse(localStorage.getItem("user"))

    return (
        <div>
            <form className={classes.root}>
                <TextField
                    id="cantidad"
                    label="Cantidad de Acciones"
                    onChange={e => setCantidad(e.target.value)}
                    value={cantidad}
                    variant="outlined"
                    type="number" />
                <TextField
                    type="number"
                    onChange={e => setPrecio(e.target.value)}
                    id="precio"
                    label="Precio"
                    value={precio}
                    variant="outlined" />
                <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    id="vencimiento"
                    label="Vencimiento"
                    value={vencimiento}
                    variant="outlined"
                    type="date"
                    onChange={e => setVencimiento(e.target.value)}/>
            </form>
            <FormControlLabel className="p-2"
                control={<Checkbox checked={accept} onChange={event => setAccept(event.target.checked)}/>}
                label={<Button style= {{ textTransform:'none'}} value="justify" onClick={() => setShow(true)}>
                            {properties.labels.aceptarTerminos}
                        </Button>}/>
            <div>
            </div>
            <div>
                <Button className="p-2 ml-1" variant="contained" color="primary" onClick={() => save()}>
                    {properties.labels.cargar}
                </Button>
            </div>
            <Alert className="mt-2" variant={alert.variant} severity={alert.severity} icon={alert.icon}>
                {alert.message}
            </Alert>
            <Dialog
                open={show}
                onClose={() => setShow(false)}
                scroll="body">
                <DialogTitle id="scroll-dialog-title">{properties.labels.terminosTitle}</DialogTitle>
                <DialogContent dividers={true}>
                    <TerminosYCondiciones/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShow(false)} color="primary">
                        {properties.labels.cerrar}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function save() {
        if (accept) {
            RestService.POST.saveOrdenDeVenta({
                creadorId : usuario.id,
                nombreEmpresa : props.empresa,
                cantidadDeAcciones : cantidad,
                precio : precio,
                fechaDeVencimiento : vencimiento
            }).then(() => {
                setAlert({
                    show: true,
                    variant: "filled",
                    severity: "success",
                    message: "Orden cargada correctamente!"
                })
            }).catch((error) => {
                setAlert({
                    show: true,
                    severity: "error",
                    variant: "filled",
                    message: error.response.data.message
                })
            })
        } else {
            setAlert({
                show: true,
                severity: "warning",
                variant: "filled",
                message: "Debes aceptar los terminos y condiciones"
            })
        }
    }
}


