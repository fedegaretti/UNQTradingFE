import React, {useState} from 'react';
import { RestService } from '../../Service/RestService'
import { useForm } from '../Common/GenericHookForm.jsx'
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useForkRef } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { properties } from "../../Properties/properties.js"
import { formStyles } from "../MaterialDesign/Styles"

export default function RegistroForm() {

    const { values, bind } = useForm({
        username: "",
        password: "",
        confirmarPass: "",
        nombre: "",
        apellido: "",
        email: "",
        confirmarEmail: "",
        dni: "",
        cuit: ""
      });

    const message = "El campo no puede estar vacío"
    const [errorPass, setErrorPass] = useState({visible: false, message: ''})
    const [errorConfirmarPass, setErrorConfirmarPass] = useState({visible: false, message: ''})
    const [errorUsername, setErrorUsername] = useState({visible: false, message: ''})
    const [errorNombre, setErrorNombre] = useState({visible: false, message: ''})
    const [errorApellido, setErrorApellido] = useState({visible: false, message: ''})
    const [errorDni, setErrorDni] = useState({visible: false, message: ''})
    const [errorEmail, setErrorEmail] = useState({visible: false, message: ''})
    const [errorConfirmarEmail, setErrorConfirmarEmail] = useState({visible: false, message: ''})
    const [errorCuit, setErrorCuit] = useState({visible: false, message: ''})
    const [accept, setAccept] = useState(false)
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState({ show: false, variant: "danger", message: '', icon: false });
    const classes = formStyles();

    return (
        <div>
            <form className={classes.root}>
                <TextField
                    {...bind}
                    id="nombre"
                    label="Nombre"
                    variant="outlined"
                    error = {errorNombre.visible}
                    onBlur = {e => handleErrorNombre(e.target.value)}
                    helperText= {errorNombre.message}
                    type="text" />
                <TextField
                    {...bind}
                    id="apellido"
                    label="Apellido"
                    variant="outlined"
                    error = {errorApellido.visible}
                    onBlur = {e => handleErrorApellido(e.target.value)}
                    helperText= {errorApellido.message}
                    type="text" />
                <TextField
                    {...bind}
                    id="dni"
                    label="DNI"
                    variant="outlined"
                    error = {errorDni.visible}
                    onBlur = {e => handleErrorDni(e.target.value)}
                    helperText= {errorDni.message}
                    type="number" />
                <TextField
                    {...bind}
                    id="cuit"
                    label="CUIT"
                    variant="outlined"
                    error = {errorCuit.visible}
                    onBlur = {e => handleErrorCuit(e.target.value)}
                    helperText= {errorCuit.message}
                    type="number" />
                <TextField
                    {...bind}
                    id="email"
                    label="Email"
                    variant="outlined"
                    error = {errorEmail.visible}
                    onBlur = {e => handleErrorEmail(e.target.value)}
                    helperText= {errorEmail.message}
                    type="mail" />
                <TextField
                    {...bind}
                    id="confirmarEmail"
                    label="Confirmar Email"
                    variant="outlined"
                    error = {errorConfirmarEmail.visible}
                    onBlur = {e => handleErrorConfirmarEmail(e.target.value)}
                    helperText= {errorConfirmarEmail.message}
                    type="mail" />
                <TextField
                    {...bind}
                    id="username"
                    label="Nombre de usuario"
                    variant="outlined"
                    type="text" 
                    error = {errorUsername.visible}
                    onBlur = {e => handleErrorUsername(e.target.value)}
                    helperText= {errorUsername.message}/>
                <TextField
                    {...bind}
                    id="password"
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    value = {useForm.password}
                    error = {errorPass.visible}
                    onBlur = {e => handleErrorPass(e.target.value)}
                    helperText= {errorPass.message}/>
                <TextField
                    {...bind}
                    id="confirmarPass"
                    label="Confirmar contraseña"
                    variant="outlined"
                    type="password"
                    error= {errorConfirmarPass.visible}
                    onBlur = {e => handleErrorConfirmarPass(e.target.value)}
                    helperText= {errorConfirmarPass.message}/>
            </form>
            <FormControlLabel className="p-2"
                control={<Checkbox checked={accept} onChange={event => setAccept(event.target.checked)}/>}
                label={<Button style= {{ textTransform:'none'}} value="justify" onClick={() => setShow(true)}>
                            {properties.labels.aceptarTerminos}
                        </Button>}/>
            <div>
            </div>
            <div>
                <Button className="p-2 ml-1" variant="contained" color="primary" onClick={() => register()}>
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
                    <DialogContentText
                        id="scroll-dialog-description">
                            {properties.labels.terminosDetalle}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShow(false)} color="primary">
                        {properties.labels.cerrar}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function handleErrorUsername(value) {
        if (value === "") {
            setErrorUsername({
                visible: true,
                message: message
            })
        } else {
            setErrorUsername({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorNombre(value) {
        if (value === "") {
            setErrorNombre({
                visible: true,
                message: message
            })
        } else {
            setErrorNombre({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorApellido(value) {
        if (value === "") {
            setErrorApellido({
                visible: true,
                message: message
            })
        } else {
            setErrorApellido({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorEmail(value) {
        //TODO: Me falta validar el formato
        if (value === "") {
            setErrorEmail({
                visible: true,
                message: message
            })
        } else {
            setErrorEmail({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorConfirmarEmail(value) {

        let email = Object.values(values)[5]
        let matchEmail = Object.values(values)[6]

        if (value === "") {
            setErrorConfirmarEmail({
                visible: true,
                message: message
            })
        } else if (email != matchEmail) {
            setErrorConfirmarEmail({
                visible: true,
                message: "La dirección de email no coincide"
            })       
        } else {
            setErrorConfirmarEmail({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorDni(value) {
        if (value === "") {
            setErrorDni({
                visible: true,
                message: message
            })
        } else {
            setErrorDni({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorCuit(value) {
        if (value === "") {
            setErrorCuit({
                visible: true,
                message: message
            })
        } else {
            setErrorCuit({
                visible: false,
                message: ""
            })
        }
    }

    function handleErrorPass(value) {
        if (value === "") {
            setErrorPass({
                visible: true,
                message: message
            })
        } else if (value.length < 6) {
            setErrorPass({
                visible: true,
                message: "La contraseña debe tener al menos 6 caracteres"
            })       
        } else {
            setErrorPass({
                visible: false,
                message: ''
            })
        }
    }

    function handleErrorConfirmarPass(value) {

        let pass = Object.values(values)[1]
        let matchPass = Object.values(values)[2]

        if (value === "") {
            setErrorConfirmarPass({
                visible: true,
                message: message
            })
        } else if (pass != matchPass) {
            setErrorConfirmarPass({
                visible: true,
                message: "La contraseña no coincide"
            })       
        } else if (value.length < 6) {
            setErrorConfirmarPass({
                visible: true,
                message: "La contraseña debe tener al menos 6 caracteres"
            })       
        } else {
            setErrorConfirmarPass({
                visible: false,
                message: ''
            })
        }
    }

    function register() {

    }
}


