import React, { useState } from 'react';
import { useForm } from '../Common/GenericHookForm.jsx'
import { TextField, Button, Card, CardContent, CardActions, Grid, AppBar, Toolbar, Typography, Link, Divider } from '@material-ui/core';
import { properties } from "../../Properties/properties.js";
import { loginStyles }  from '../MaterialDesign/Styles';
import { Link as RouterLink } from 'react-router-dom';


export default function LoginUsuarioForm() {

    const { values, bind } = useForm({
        dni: "",
        username: "",
        password: "",
    });

    const message = "El campo no puede estar vacío"
    const success = { visible: false, message: '' }
    const failed = { visible: true, message: message }
    const [errorPass, setErrorPass] = useState({ visible: false, message: '' })
    const [errorUsername, setErrorUsername] = useState(success)
    const [errorDni, setErrorDni] = useState(success)
    const classes = loginStyles();

    return (
        <Grid container>
            <Grid container direction="row">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Login Usuario
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                    <Card className={classes.root}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{ marginTop: "10px" }}>
                            <img src={require('../../Images/logo100.png')} alt="UNQTrading Logo" width="100" height="87" />
                        </Grid>
                        <form className={classes.form} >
                            <CardContent style={{ paddingBottom: "0px" }}>
                                <TextField
                                    {...bind}
                                    required
                                    id="dni"
                                    label="DNI"
                                    variant="outlined"
                                    error={errorDni.visible}
                                    onBlur={e => setErrorDni(e.target.value === '' ? failed : success)}
                                    helperText={errorDni.message}
                                    type="number" />
                            </CardContent>
                            <CardContent style={{ paddingBottom: "0px" }}>
                                <TextField
                                    {...bind}
                                    required
                                    id="username"
                                    label="Nombre de usuario"
                                    variant="outlined"
                                    type="text"
                                    error={errorUsername.visible}
                                    onBlur={e => setErrorUsername(e.target.value === '' ? failed : success)}
                                    helperText={errorUsername.message} />
                            </CardContent>
                            <CardContent style={{ paddingBottom: "0px" }}>
                                <TextField
                                    {...bind}
                                    required
                                    id="password"
                                    label="Contraseña"
                                    variant="outlined"
                                    type="password"
                                    value={useForm.password}
                                    error={errorPass.visible}
                                    onBlur={e => handleErrorPass(e.target.value)}
                                    helperText={errorPass.message} />
                            </CardContent>
                        </form>
                        <Divider />
                        <CardActions>
                            <Grid container direction="column">
                                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "8px" }}>
                                    <Button className="p-2 ml-1" variant="contained" color="primary" onClick={() => login()}>
                                        {properties.labels.ingresar}
                                    </Button>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Link href="#"> {properties.labels.olvideContraseña}</Link>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Link component={RouterLink} to={"/Registro"}> {properties.labels.noEstasRegistrado} </Link>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );

    function handleErrorPass(value) {
        if (value === "") {
            setErrorPass({
                visible: true,
                message: message
            })
        } else {
            setErrorPass({
                visible: false,
                message: ''
            })
        }
    }


    function login() {

    }
}
