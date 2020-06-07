import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';

export default function OrdenesDeVenta()  {

return (
        <div>
            <div className="bg-secondary justify-content-center">
                <h3 className="text-white"> Visualización de Acciones </h3>
            </div>
            <div className="container">
                <div style={{display: 'flex', alignItems:'center', height: '90vh'}}>
                    <OrdenesDeVentaTable/>
                </div>
            </div>
         </div>
        );
    }
