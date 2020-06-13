import React from 'react';
import AccionesTable from './AccionesTable';

export default function Acciones()  {

return (
     <div>
            <div className="d-flex justify-content-center mb-4">
                <h3 className="text-dark">Mis acciones</h3>
            </div>
           
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <AccionesTable/>
                    </div>
                </div>
            </div>
         </div>
        );
    }
