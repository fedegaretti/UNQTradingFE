import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, Col, Container } from 'react-bootstrap';

export default function Venta() {

    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [cantidadClass, setCantidadClass] = useState('form-control');
    const [vencimientoClass, setVencimientoClass] = useState('form-control');
    const [precioClass, setPrecioClass] = useState('form-control');

    return (
        <div>
            <Container>
            <Form>
              <Form.Group controlId="cantidad">
                <Form.Label>Cantidad de acciones</Form.Label>
                <Form.Control type="number"
                            className= {cantidadClass}
                            placeholder="Ingrese una cantidad"
                            onChange={e => setCantidad(e.target.value)}
                            onBlur={e => handleCantidad(e, e.target.value)} />
              </Form.Group>

              <Form.Group controlId="precio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el precio"
                             className= {precioClass}
                             onChange={e => setPrecio(e.target.value)}
                             onBlur={e => handlePrecio(e, e.target.value)} />
              </Form.Group>

              <Form.Group controlId="vencimiento">
                <Form.Label>Fecha vencimiento</Form.Label>
                <Form.Control type="text" placeholder="Formato dd-mm-yyyy"
                             className= {vencimientoClass}
                             onChange={e => setVencimiento(e.target.value)}
                             onBlur={e => handleVencimiento(e, e.target.value)} />
              </Form.Group>

              <Button variant="primary" onClick={ev => sent()}>
                Enviar
              </Button>
            </Form>

            </Container>
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
        const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        if (regex.test(value)) {
            setVencimientoClass("form-control is-valid");
        }else{
            setVencimientoClass("form-control is-invalid");
        }
    }

    function sent() {
        axios.post(`http://localhost:8080/api/venta/save`, {
            nombreEmpresa : "Pepe Company",
            cantidadDeAcciones : cantidad,
            precio : precio,
            fechaDeVencimiento : vencimiento
        }).then((response) => {
            alert("ok")
        }).catch((error) => {
        console.log(error.response)
            alert("fail")
        })
    }

}


