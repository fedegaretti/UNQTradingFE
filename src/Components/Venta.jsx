import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';
import { Button, Form, Col, Container, Row, InputGroup } from 'react-bootstrap';

export default function Venta() {

    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [cantidadClass, setCantidadClass] = useState('form-control');
    const [vencimientoClass, setVencimientoClass] = useState('form-control');
    const [precioClass, setPrecioClass] = useState('form-control');

    return (
        <div>
            <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-chart-line"></i></InputGroup.Text>
                  </InputGroup.Prepend>
                    <Form.Control type="number"
                                className= {cantidadClass}
                                placeholder="Cantidad de acciones"
                                onChange={e => setCantidad(e.target.value)}
                                onBlur={e => handleCantidad(e, e.target.value)} />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                  </InputGroup.Prepend>
                <Form.Control type="number" placeholder="Precio"
                             className= {precioClass}
                             onChange={e => setPrecio(e.target.value)}
                             onBlur={e => handlePrecio(e, e.target.value)} />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-calendar-day"></i></InputGroup.Text>
                  </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Vencimiento (dd-mm-yyyy)"
                             className= {vencimientoClass}
                             onChange={e => setVencimiento(e.target.value)}
                             onBlur={e => handleVencimiento(e, e.target.value)} />
                </InputGroup>




              <Button variant="primary" onClick={ev => sent()}>
                Enviar
              </Button>
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
        const regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        if (regex.test(value)) {
            setVencimientoClass("form-control is-valid");
        }else{
            setVencimientoClass("form-control is-invalid");
        }
    }

    function sent() {
        axios.post(`http://localhost:8080/api/venta/save`, {
            nombreEmpresa : "UNQ",
            cantidadDeAcciones : cantidad,
            precio : precio,
            fechaDeVencimiento : vencimiento
        }).then((response) => {
            alert("ok")
        }).catch((error) => {
            alert("fail")
        })
    }

}


