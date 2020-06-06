import React, {useState} from 'react';
import axios from 'axios';
import { Button, Form, Col, Container } from 'react-bootstrap';

export default function Venta() {

    const [cantidad, handleCantidad] = useState('');
    const [precio, handlePrecio] = useState('');

    return (
        <div>
            <Container>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Ingrese cantidad" onChange={event => handleCantidad(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Ingrese precio"
                                onChange={event => handlePrecio(event.target.value)}
                            />
                        </Col>
                        <Button variant="primary" onClick={ev => sent(cantidad, precio)}>Enviar</Button>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    );
}

function sent(cantidad, precio) {
    axios.post(`http://localhost:8080/api/venta/save`, {
        nombreEmpresa : "Pepe Company",
        cantidadDeAcciones : cantidad,
        precio : precio,
        fechaDeVencimiento : "06-07-2020"
    }).then((response) => {
        alert("ok")
    }).catch((error) => {
        alert("fail")
    })
}
