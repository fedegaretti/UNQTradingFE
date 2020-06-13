import React, {useState} from 'react';
import '../App.css';
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
import {RestService} from '../Service/RestService'


export default function Venta() {

    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [cantidadClass, setCantidadClass] = useState('form-control');
    const [vencimientoClass, setVencimientoClass] = useState('form-control');
    const [precioClass, setPrecioClass] = useState('form-control');
    const [alert, setAlert] = useState({show: false, variant: "danger", message: ''});

    return (
        <div>
            <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text><i className="fas fa-chart-line"/></InputGroup.Text>
                  </InputGroup.Prepend>
                    <Form.Control type="number"
                                className= {cantidadClass}
                                placeholder="Cantidad de acciones"
                                onChange={e => setCantidad(e.target.value)}
                                onBlur={e => handleCantidad(e, e.target.value)} />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                <Form.Control type="number" placeholder="Precio"
                             className= {precioClass}
                             onChange={e => setPrecio(e.target.value)}
                             onBlur={e => handlePrecio(e, e.target.value)} />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Vencimiento</InputGroup.Text>
                  </InputGroup.Prepend>
                <Form.Control type="date"
                             className= {vencimientoClass}
                             onChange={e => setVencimiento(e.target.value)}
                             onBlur={e => handleVencimiento(e, e.target.value)} />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Button variant="primary" onClick={() => sent()}>
                    Cargar
                  </Button>
                </InputGroup>

                <Alert variant={alert.variant} show={alert.show}>
                    {alert.message}
                </Alert>
            </Form>
        </div>
    );

    function handleCantidad(ev, value){
        ev.preventDefault();
        if(value === "" || value <= 0){
            setCantidadClass("form-control is-invalid");
        }else{
            setCantidadClass("form-control is-valid");
        }
    }

    function handlePrecio(ev, value){
        ev.preventDefault();
        if(value === "" || value <= 0){
            setPrecioClass("form-control is-invalid");
        }else{
            setPrecioClass("form-control is-valid");
        }
    }

    function handleVencimiento(ev, value){
        ev.preventDefault();
        if (Date.parse(value) > Date.now()) {
            setVencimientoClass("form-control is-valid");
        }else{
            setVencimientoClass("form-control is-invalid");
        }
    }

    function sent() {
        RestService.POST.saveOrdenDeVenta({
            nombreEmpresa : "UNQ",
            cantidadDeAcciones : cantidad,
            precio : precio,
            fechaDeVencimiento : vencimiento
        }).then(() => {
            setAlert({
                show: true,
                variant: "success",
                message: "Orden cargada correctamente"
            })
        }).catch(() => {
            setAlert({
                show: true,
                variant: "danger",
                message: "Ocurrio un error al cargar la orden. Intente nuevamente"
            })
        })
    }
}


