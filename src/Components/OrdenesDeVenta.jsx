import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import '../App.css';
import { Link } from 'react-router-dom'

export default function OrdenesDeVenta()  {

return (
     <div className="App">
            <div className="bg-secondary d-flex justify-content-center mb-4">
                <h3 className="text-white"> Ordenes de Venta</h3>
            </div>
           
            <div className="container pt-5">
                <div class="row align-items-center pt-5">
                    <div class="col-sm pt-5">
                        <OrdenesDeVentaTable/>
                        <Link to="/venta" className="btn btn-primary">Cargar orden</Link>
                    </div>
                </div>

            </div>
         </div>
        );
    }
