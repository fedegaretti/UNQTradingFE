import React from 'react';
import ComprarAccionesTable from './ComprarAccionesTable';
import NavigationBar from "../NavigationBar/NavigationBar";
import StickyFooter from "../Footer/Footer";

export default function ComprarAcciones()  {

    return (
        <div>
            <NavigationBar name={"Comprar acciones"}/>
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <ComprarAccionesTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}