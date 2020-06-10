import React, {useState, useEffect} from 'react';
import {comprarAcciones, findOrdenDeVenta} from '../Service/RestService'
import { Button, Form, InputGroup, Alert } from 'react-bootstrap';
export default function OrdenDeVenta() {
    const [orden, setOrden] = useState('')

    useEffect(() => {
        findOrdenDeVenta(1).then(response => setOrden(response.data))
    })

    return (
        <div>
            <Form>
                <label>Empresa: </label>
                <Form.Control type="text" defaultValue={orden.nombreEmpresa} readOnly/>
                <label>Cantidad de acciones: </label>
                <Form.Control type="number" defaultValue={orden.cantidadDeAcciones} readnOnly/>
                <label>Precio: </label>
                <Form.Control type="number" defaultValue={orden.precio} readOnly/>
                <label>Fecha de Creacion: </label>
                <Form.Control type="date" defaultValue={orden.fechaDeCreacion} readOnly/>
                <label>Fecha de Vencimiento: </label>
                <Form.Control type="date" defaultValue={orden.fechaDeVencimiento} readOnly/>
            </Form>
            <Button variant="primary" onClick={event => comprar(event, orden.id)}>
                    Comprar
            </Button>
        </div>
    )
}

function comprar(event, id) {
    event.preventDefault()
    comprarAcciones(1, id)
}


