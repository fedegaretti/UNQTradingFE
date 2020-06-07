import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import Venta from './Venta';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';

export default function OrdenesDeVenta()  {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
     <div className="App">
            <div className="bg-secondary d-flex justify-content-center mb-4">
                <h3 className="text-white"> Ordenes de Venta</h3>
            </div>
           
            <div className="container pt-5">
                <div class="row align-items-center pt-5">
                    <div class="col-sm pt-5">
                        <OrdenesDeVentaTable/>
                          <Button variant="primary" onClick={handleShow}>
                            Cargar nueva
                          </Button>
                    </div>
                </div>

            </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Nueva orden de venta</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Venta/>
                  </Modal.Body>
                </Modal>
         </div>
        );
    }
