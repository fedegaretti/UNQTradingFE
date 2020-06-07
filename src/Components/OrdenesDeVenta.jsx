import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';

export default function OrdenesDeVenta()  {

return (
        <div>
            <header className="bg-primary">
                <div className=" row justify-content-center">
                    <h3 className="text-white"> Visualización de Acciones </h3>
                </div>
            </header>
            <div className="container">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
                    <OrdenesDeVentaTable/>
                </div>
            </div>
        </div>
        );
    }
