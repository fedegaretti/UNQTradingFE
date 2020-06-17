import React, {useState} from 'react';
import { RestService } from '../../Service/RestService'
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { properties } from "../../Properties/properties.js"
import { formStyles } from "../MaterialDesign/Styles"

export default function RegistroForm() {

    const message = "El campo no puede estar vacío"
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPass, setConfirmarPass] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [dni, setDni] = useState('');
    const [cuit, setCuit] = useState('');
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
                    id="nombre"
                    label="Nombre"
                    onChange={e => setNombre(e.target.value)}
                    value={nombre}
                    variant="outlined"
                    error = {errorNombre.visible}
                    onBlur = {e => handleErrorNombre(e.target.value)}
                    helperText= {errorNombre.message}
                    type="text" />
                <TextField
                    id="apellido"
                    label="Apellido"
                    onChange={e => setApellido(e.target.value)}
                    value={apellido}
                    variant="outlined"
                    error = {errorApellido.visible}
                    onBlur = {e => handleErrorApellido(e.target.value)}
                    helperText= {errorApellido.message}
                    type="text" />
                <TextField
                    id="dni"
                    label="DNI"
                    onChange={e => setDni(e.target.value)}
                    value={dni}
                    variant="outlined"
                    error = {errorDni.visible}
                    onBlur = {e => handleErrorDni(e.target.value)}
                    helperText= {errorDni.message}
                    type="number" />
                <TextField
                    id="cuit"
                    label="CUIT"
                    onChange={e => setCuit(e.target.value)}
                    value={cuit}
                    variant="outlined"
                    error = {errorCuit.visible}
                    onBlur = {e => handleErrorCuit(e.target.value)}
                    helperText= {errorCuit.message}
                    type="number" />
                <TextField
                    id="email"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    variant="outlined"
                    error = {errorEmail.visible}
                    onBlur = {e => handleErrorEmail(e.target.value)}
                    helperText= {errorEmail.message}
                    type="mail" />
                <TextField
                    id="confirmarEmail"
                    label="Confirmar Email"
                    onChange={e => setConfirmarEmail(e.target.value)}
                    value={confirmarEmail}
                    variant="outlined"
                    error = {errorConfirmarEmail.visible}
                    onBlur = {e => handleErrorConfirmarEmail(e.target.value)}
                    helperText= {errorConfirmarEmail.message}
                    type="mail" />
                <TextField
                    id="username"
                    label="Nombre de usuario"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    variant="outlined"
                    type="text" 
                    error = {errorUsername.visible}
                    onBlur = {e => handleErrorUsername(e.target.value)}
                    helperText= {errorUsername.message}/>
                <TextField
                    id="password"
                    label="Contraseña"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    variant="outlined"
                    type="password"
                    error = {errorPass.visible}
                    onBlur = {e => handleErrorPass(e.target.value)}
                    helperText= {errorPass.message}/>
                <TextField
                    id="confirmarPass"
                    label="Confirmar contraseña"
                    onChange={e => setConfirmarPass(e.target.value)}
                    value={confirmarPass}
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
        if (value === "") {
            setErrorConfirmarEmail({
                visible: true,
                message: message
            })
        } else if (value != email) {
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
        if (value === "") {
            setErrorConfirmarPass({
                visible: true,
                message: message
            })
        } else if (value != password) {
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


