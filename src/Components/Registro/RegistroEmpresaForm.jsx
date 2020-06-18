import React, {useState} from 'react';
import { useForm } from '../Common/GenericHookForm.jsx'
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Card, CardContent, Grid, AppBar, Toolbar, Typography} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { properties } from "../../Properties/properties.js"
import { formStyles } from "../MaterialDesign/Styles"
import { RestService } from '../../Service/RestService'

export default function RegistroForm() {

    const { values, bind } = useForm({
        nombreEmpresa: "",
        password: "",
        confirmarPass: "",
        email: "",
        confirmarEmail: "",
        cuit: ""
      });

    const message = "El campo no puede estar vacío"
    const success = {visible: false, message: ''}
    const failed = {visible: true, message: message}
    const [errorPass, setErrorPass] = useState({visible: false, message: ''})
    const [errorConfirmarPass, setErrorConfirmarPass] = useState({visible: false, message: ''})
    const [errorEmpresa, setErrorEmpresa] = useState(success)
    const [errorEmail, setErrorEmail] = useState({visible: false, message: ''})
    const [errorConfirmarEmail, setErrorConfirmarEmail] = useState({visible: false, message: ''})
    const [errorCuit, setErrorCuit] = useState({visible: false, message: ''})
    const [accept, setAccept] = useState(false)
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState({ show: true, variant: "filled", message: '', icon: false });
    const classes = formStyles();
    
    return (
        <div>
            <Grid container>
                <Grid container direction="row">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Registrar Empresa
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            <Grid container direction="row" justify="center" alignItems="center" maxWidth="xs">
                <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                    <Card className={classes.root}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{ marginTop: "10px" }}>
                            <img src={require('../../Images/logo100.png')} alt="UNQTrading Logo" width="100" height="87" />
                        </Grid>
                            <form className={classes.root}>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <TextField
                                            {...bind}
                                            id="nombreEmpresa"
                                            label="Nombre Empresa"
                                            variant="outlined"
                                            error = {errorEmpresa.visible}
                                            onBlur = {e => setErrorEmpresa(e.target.value === '' ? failed : success)}
                                            helperText= {errorEmpresa.message}
                                            type="text" />
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <TextField
                                            {...bind}
                                            id="cuit"
                                            label="CUIT"
                                            variant="outlined"
                                            error = {errorCuit.visible}
                                            onBlur = {e => handleErrorCuit(e.target.value)}
                                            helperText= {errorCuit.message}
                                            type="number" />
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <TextField
                                            {...bind}
                                            id="email"
                                            label="Email"
                                            variant="outlined"
                                            error = {errorEmail.visible}
                                            onBlur = {e => handleErrorEmail(e.target.value)}
                                            helperText= {errorEmail.message}
                                            type="mail" />
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <TextField
                                            {...bind}
                                            id="confirmarEmail"
                                            label="Confirmar Email"
                                            variant="outlined"
                                            error = {errorConfirmarEmail.visible}
                                            onBlur = {e => handleErrorConfirmarEmail(e.target.value)}
                                            helperText= {errorConfirmarEmail.message}
                                            type="mail" />
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
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
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <TextField
                                            {...bind}
                                            id="confirmarPass"
                                            label="Confirmar contraseña"
                                            variant="outlined"
                                            type="password"
                                            error= {errorConfirmarPass.visible}
                                            onBlur = {e => handleErrorConfirmarPass(e.target.value)}
                                            helperText= {errorConfirmarPass.message}/>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            </form>
                        <FormControlLabel className="p-2"
                            control={<Checkbox checked={accept} onChange={event => setAccept(event.target.checked)}/>}
                            label={<Button style= {{ textTransform:'none'}} value="justify" onClick={() => setShow(true)}>
                                        {properties.labels.aceptarTerminos}
                                    </Button>}/>
                        <div>
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
                            <div>
                                <Button disabled={accept && completed(values) ? false : true} className="p-2 ml-1" variant="contained" color="primary" onClick={() => register()}>
                                    {properties.labels.registrar}
                                </Button>
                            </div>
                            <Alert className="mt-2" variant={alert.variant} severity={alert.severity} icon={alert.icon}>
                                {alert.message}
                            </Alert>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

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

        let email = Object.values(values)[3]
        let matchEmail = Object.values(values)[4]

        if (value === "") {
            setErrorConfirmarEmail({
                visible: true,
                message: message
            })
        } else if (email !== matchEmail) {
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

    function handleErrorCuit(value) {
        if (value === "") {
            setErrorCuit({
                visible: true,
                message: message
            })
        } else if (value.length !== 11) {
            setErrorCuit({
                visible: true,
                message: "El cuit debe tener 11 caracteres"
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
        } else if (pass !== matchPass) {
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
        console.log({
            nombreEmpresa: Object.values(values)[0],
            password: Object.values(values)[1],
            email: Object.values(values)[3],
            cuit: Object.values(values)[5]
            })
        if (accept) {
            RestService.POST.registrarEmpresa({
                nombreEmpresa: Object.values(values)[0],
                password: Object.values(values)[1],
                email: Object.values(values)[3],
                cuit: Object.values(values)[5]
                }).then(() => {
                setAlert({
                    show: true,
                    variant: "filled",
                    severity: "success",
                    message: "Registro exitoso!!"
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


const completed = (values) => {
    for (let i = 0; i < values.length - 1; i++) {
        if (Object.values(values)[i] === "" || Object.values(values)[i] === "undefined") {
            return false              
        }
    }
    return true
}