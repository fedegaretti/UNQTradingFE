import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';

export default function OrdenesDeVenta()  {

return (
        <div>
            <div className="container">
            <header className="bg-primary">
                <div className=" row justify-content-center">
                    <h3 className="text-white"> Visualización de Acciones </h3>
                </div>
            </header>
            <div className="container">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-wrap align-items-center">
                        <OrdenesDeVentaTable/>
                    </div>
                </div>
             </div>
            </div>
         </div>
        );
    }
