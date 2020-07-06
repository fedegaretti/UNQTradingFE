import React, { useEffect, useState, useRef } from 'react';
import { useForm } from '../Common/GenericHookForm.jsx'
import { RestService } from "../../Service/RestService";
import { TextField, Fab, Card, CardContent, CardActions, Grid,
AppBar, Toolbar, Typography, Link, Divider} from '@material-ui/core';
import Alert from "@material-ui/lab/Alert";
import { properties } from "../../Properties/properties.js";
import { loginStyles } from '../MaterialDesign/Styles';
import { Link as RouterLink } from 'react-router-dom';
import NavigationIcon from '@material-ui/icons/Navigation';


export default function LoginPersona(props) {

    const { history } = props;
    const message = "El campo no puede estar vacío"
    const success = { visible: false, message: '' }
    const failed = { visible: true, message: message }
    const [dni, setDni] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [errorUsername, setErrorUsername] = useState(success)
    const [errorDni, setErrorDni] = useState(success)
    const [alert, setAlert] = useState({ display: 'none', message: '' });
    const classes = loginStyles();
    const hasErrors = useRef(true);

    useEffect(() => {
        hasErrors.current = (dni === "" || username === "" || password === "");
    }, [dni, username, password]
    );
    
    function validateDni(dni) {
        if (dni === "") {
            setErrorDni(failed);
        } else {
            setErrorDni(success)
        }
    }

    function validateUsername(username) {
        if (username === "") {
            setErrorUsername(failed);
        } else {
            setErrorUsername(success);
        }
    }

    function validatePassword(password) {
        if (password === "") {
            setErrorPassword(failed);
        } else {
            setErrorPassword(success);
        }
    }

    function login(ev) {
        ev.preventDefault()
        if (!hasErrors.current) {
            RestService.POST.loginPersona(dni, username, password)
                .then(response => {
                    localStorage.setItem("user", JSON.stringify(response.data))
                    history.push("/acciones")
                }).catch(error => {
                    setAlert({
                        display: 'block',
                        message: error.response.data.message
                    });
                })
        }
    }
    return (
        <Grid container>
            <Grid container direction="row">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Login Persona
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
                                    required
                                    id="dni"
                                    label="DNI"
                                    variant="outlined"
                                    error={errorDni.visible}
                                    onChange={e => setDni(e.target.value)}
                                    onBlur={e => validateDni(e.target.value)}
                                    helperText={errorDni.message}
                                    type="number" />
                            </CardContent>
                            <CardContent style={{ paddingBottom: "0px" }}>
                                <TextField
                                    required
                                    id="username"
                                    label="Nombre de usuario"
                                    variant="outlined"
                                    type="text"
                                    error={errorUsername.visible}
                                    onChange={e => setUsername(e.target.value)}
                                    onBlur={e => validateUsername(e.target.value)}
                                    helperText={errorUsername.message} />
                            </CardContent>
                            <CardContent style={{ paddingBottom: "0px" }}>
                                <TextField
                                    required
                                    id="password"
                                    label="Contraseña"
                                    variant="outlined"
                                    type="password"
                                    value={useForm.password}
                                    error={errorPassword.visible}
                                    onChange={e => setPassword(e.target.value)}
                                    onBlur={e => validatePassword(e.target.value)}
                                    helperText={errorPassword.message} />
                            </CardContent>
                        </form>
                        <Divider />
                        <CardActions>
                            <Grid container direction="column">
                                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "8px" }}>
                                    <Fab disabled={hasErrors.current} variant="extended" color="primary" onClick={ev => login(ev)}>
                                       <NavigationIcon className={classes.extendedIcon} />
                                       {properties.labels.ingresar}
                                    </Fab>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Link href="#"> {properties.labels.olvideContraseña}</Link>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Link component={RouterLink} to={"/Registro"}> {properties.labels.noEstasRegistrado} </Link>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Alert className="mt-2" variant="filled" severity="error" icon={false} style={{display: alert.display}}>
                                        {alert.message}
                                    </Alert>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

    );
}
