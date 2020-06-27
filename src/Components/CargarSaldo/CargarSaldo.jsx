import React, {useEffect, useRef, useState} from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {Card, CardActions, CardContent, Divider, Fab, Grid, TextField} from "@material-ui/core";
import {loginEmpresaStyle} from "../MaterialDesign/Styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Alert from "@material-ui/lab/Alert";
import {RestService} from "../../Service/RestService";
import useTheme from "@material-ui/core/styles/useTheme";
import Collapse from "@material-ui/core/Collapse";

export default function CargarSaldo(props) {
    const persona = !!props.location.state ? props.location.state.usuario : props.history.push("/LoginPersona");
    const theme = useTheme();
    const classes = loginEmpresaStyle(theme)
    const message = "El saldo debe ser mayor a 0"
    const success = { visible: false, message: '' }
    const failed = { visible: true, message: message }
    const [alert, setAlert] = useState({severity: '', message: ''});
    const [saldo, setSaldo] = useState("")
    const [errorSaldo, setErrorSaldo] = useState(success)
    const [open, setOpen] = React.useState(false);
    const hasErrors = useRef(true);

    useEffect(() => {
            hasErrors.current = (saldo < 1);
        }, [saldo]
    );

    function validateSaldo(saldo) {
        if (saldo < 1) {
            setErrorSaldo(failed);
        } else {
            setErrorSaldo(success);
        }
    }

    function closeAlert() {
        setTimeout(() => {
            setOpen(false)
        }, 3000)
    }

    function cargarSaldo(ev) {
        ev.preventDefault();
        if (!hasErrors.current) {
            RestService.POST.cargarSaldo(persona.dni, saldo)
                .then(() => {
                    setAlert({
                        severity: 'success',
                        message: 'Saldo cargado correctamente'
                    })
                }).catch(error => {
                    setAlert({
                        severity: 'error',
                        message: error.response.data.message
                    })
                })
            setOpen(true)
        }
        closeAlert();
    }

    const content = () => {
        return <Grid container direction="row" justify="center" alignItems="center">
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '80vh' }}>
                <Card className={classes.root}>
                    <form className={classes.form} >
                        <CardContent alignItems="center" justify="center" style={{ paddingBottom: "0px" }}>
                            <TextField
                                required
                                id="saldo"
                                label="Saldo"
                                variant="outlined"
                                error={errorSaldo.visible}
                                onChange={e => setSaldo(e.target.value)}
                                onBlur={e => validateSaldo(e.target.value)}
                                helperText={errorSaldo.message}
                                type="number" />
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Grid container direction="column">
                                <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "8px" }}>
                                    <Fab disabled={hasErrors.current} variant="extended" color="primary" onClick={ev => cargarSaldo(ev)}>
                                        <NavigationIcon className={classes.extendedIcon} />
                                        {'Cargar'}
                                    </Fab>
                                </Grid>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Collapse in={open}>
                                        <Alert className="mt-2" variant="filled" severity={alert.severity} icon={false} style={{display: alert.display}}>
                                            {alert.message}
                                        </Alert>
                                    </Collapse>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    }

    return (
        <div>
            <NavigationBar
                name={"Cargar saldo"}
                isUser={true}
                content={content()}
            />
        </div>
    );
}