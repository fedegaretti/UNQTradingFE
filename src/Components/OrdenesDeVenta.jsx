import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import Venta from './Venta';
import '../App.css';
import { Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import NavigationBar from "./NavigationBar/NavigationBar";

export default function OrdenesDeVenta()  {

    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false)
      window.location.reload(false)
    };
    const handleShow = () => setShow(true);

return (
     <div className="App">
            <NavigationBar name={"Ordenes de Venta"}/>
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <OrdenesDeVentaTable/>
                          <Button className="mt-2 mb-5" variant = "contained" color="primary" onClick={handleShow}>
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
