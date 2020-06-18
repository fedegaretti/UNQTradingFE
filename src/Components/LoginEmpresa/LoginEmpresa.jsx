import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        flexGrow: 1,
    },
    pos: {
        marginBottom: 12,
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    formControl: {
        margin: theme.spacing(3),
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
}));

export default function LoginEmpresa() {

    const classes = useStyles();
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
                                        autoFocus
                                        id="nombre"
                                        label="CUIL"
                                        placeholder="2011111118"
                                        type="number"
                                        variant="outlined"
                                        />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="nombreUsuario"
                                        label="Usuario"
                                        placeholder="johndoe22"
                                        variant="outlined"
                                        />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="contraseña"
                                        label="Contraseña"
                                        placeholder="MiSuperContraseña25"
                                        type="password"
                                        variant="outlined"
                                        />
                                </div>
                            </form>
                            <Divider />
                        </CardContent>
                        <CardActions>
                            <Grid container direction="column">
                                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "8px" }}>
                                    <Button variant="contained" color="primary">
                                        Ingresar
                                    </Button>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Link href="#"> Olvidé mi contraseña </Link>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Link component={RouterLink} to={"/RegistrarEmpresa"}> No estas registrado ? </Link>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}