import React, {useEffect, useRef, useState} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { RestService} from "../../Service/RestService";
import Redirect from "react-router-dom/es/Redirect";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 275,
    },
    title: {
        flexGrow: 1,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
}));

export default function LoginEmpresa() {

    const message = "El campo no puede estar vacío"
    const success = {visible: false, message: ''}
    const failed = {visible: true, message: message}
    const [alert, setAlert] = useState({display: 'none', message: ''});
    const [cuit, setCuit] = useState("");
    const [password, setPassword] = useState("");
    const [errorCuit, setErrorCuit] = useState(success);
    const [errorPassword, setErrorPassword] = useState(success);
    const hasErrors = useRef(true);

    const classes = useStyles();

    useEffect(() => {
            hasErrors.current = (cuit === "" || password === "");
        }, [cuit, password]
    );

    function validateCuit(cuit) {
        if (cuit === "") {
            setErrorCuit(failed);
        } else if (cuit.length !== 11 ) {
            setErrorCuit({
                visible: true,
                message: "El CUIT debe tener 11 dígitos"
            })
        } else {
                setErrorCuit(success);
        }
    }

    function validatePassword(password) {
        if (password === "") {
            setErrorPassword(failed);
        } else {
            setErrorPassword(success);
        }
    }

    function login() {
        if (!hasErrors.current) {
            RestService.POST.loginEmpresa(cuit, password)
                .then(() => {
                    return <Redirect to="/ordenesVenta"/>
                }).catch((error) => {
                setAlert({
                    display: 'block',
                    message: error.message
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
                            Login Empresa
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                    <Card className={classes.root}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{ marginTop: "10px"}}>
                            <img src={require('../../Images/logo100.png')} alt="UNQTrading Logo" width="100" height="87"/>
                        </Grid>
                        <CardContent style={{paddingBottom: "0px"}}>
                            <form className={classes.form}>
                                <div>
                                    <TextField
                                        required
                                        id="Cuit"
                                        label="CUIT"
                                        placeholder="3011111119"
                                        type="number"
                                        variant="outlined"
                                        error = {errorCuit.visible}
                                        helperText= {errorCuit.message}
                                        onChange={e => setCuit(e.target.value)}
                                        onBlur={e => validateCuit(e.target.value)}
                                        />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="Contraseña"
                                        label="Contraseña"
                                        placeholder="MiSuperContraseña25"
                                        type="password"
                                        variant="outlined"
                                        error = {errorPassword.visible}
                                        helperText= {errorPassword.message}
                                        onChange={e => setPassword(e.target.value)}
                                        onBlur={e => validatePassword(e.target.value)}
                                        />
                                </div>
                            </form>
                            <Divider />
                        </CardContent>
                        <CardActions>
                            <Grid container direction="column">
                                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "8px" }}>
                                    <Fab disabled={hasErrors.current} variant="extended" color="primary" onClick={login()}>
                                        <NavigationIcon className={classes.extendedIcon} />
                                        Ingresar
                                    </Fab>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Link href="#"> Olvidé mi contraseña </Link>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Link component={RouterLink} to={"/RegistrarEmpresa"}> No estas registrado ? </Link>
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