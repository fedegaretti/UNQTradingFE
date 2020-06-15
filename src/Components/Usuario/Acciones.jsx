import React from 'react';
import AccionesTable from './AccionesTable';
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Acciones()  {
    const content = () => {
        return (
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <AccionesTable/>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <NavigationBar
                name={"Mis acciones"}
                isUser={true}
                content={content()}
            />
        </div>
    );
}
