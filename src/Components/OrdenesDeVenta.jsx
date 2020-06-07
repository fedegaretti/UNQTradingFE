import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import '../App.css';
import { Link } from 'react-router-dom'

export default function OrdenesDeVenta()  {

return (
     <div className="App">
            <div className="bg-secondary row justify-content-center mb-4 ">
                <h3 className="text-white"> Ordenes de Venta</h3>
            </div>
            <div className="container padding-top">
                <div className="d-flex justify-content-center">
                    <OrdenesDeVentaTable/>
                </div>
                <Link to="/venta" className="btn btn-primary">Cargar orden</Link>
            </div>
         </div>
        );
    }
