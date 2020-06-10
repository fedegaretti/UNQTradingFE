import React, {useState, useEffect} from 'react';
import {comprarAcciones, findOrdenDeVenta} from '../Service/RestService'
import { Button, Form, Modal, Alert } from 'react-bootstrap';

export default function OrdenDeVenta() {
    const [orden, setOrden] = useState('')
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        setAlert({
            show: false
        })
    }
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState({show: false, variant: "danger", message: ''});
    useEffect(() => {
        findOrdenDeVenta(1).then(response => setOrden(response.data))
    }, [])

    function comprar(ev, ordenId) {
        ev.preventDefault()
        comprarAcciones(1, ordenId)
        .then((response) => {
            setAlert({
                show: true,
                variant: "success",
                message: "Acciones compradas correctamente!"
            })
        }).catch((error) => {
            setAlert({
                show: true,
                variant: "danger",
                message: "Ocurrio un error al comprar las acciones. Intente nuevamente"
            })
        })
    }

    return (
        <div className="container justify-content-center mt-2">
             <Button variant="primary" onClick={handleShow}>
                    Comprar
            </Button>
               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Comprar Acciones</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                        <label>Empresa: </label>
                        <Form.Control type="text" defaultValue={orden.nombreEmpresa} readOnly/>
                        <label>Cantidad de acciones: </label>
                        <Form.Control type="number" defaultValue={orden.cantidadDeAcciones} readOnly/>
                        <label>Precio: </label>
                        <Form.Control type="number" defaultValue={orden.precio} readOnly/>
                        <label>Fecha de Creacion: </label>
                        <Form.Control type="date" defaultValue={orden.fechaDeCreacion} readOnly/>
                        <label>Fecha de Vencimiento: </label>
                        <Form.Control type="date" defaultValue={orden.fechaDeVencimiento} readOnly/>
                        <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
                    </Form>
                    <div className= "container d-flex justify-content-center">
                        <Button className= "mt-2 mr-2" variant= "primary" onClick={ev => handleClose()}> 
                            Cancelar 
                        </Button>
                        <Button className="mt-2" variant= "primary" onClick={ev => comprar(ev, orden.id)}>
                            Comprar
                        </Button>
                     </div>
                     <Alert className= "mt-2" variant={alert.variant} show={alert.show}>
                        {alert.message}
                    </Alert>
                  </Modal.Body>
                </Modal>
        </div>
    )
}



