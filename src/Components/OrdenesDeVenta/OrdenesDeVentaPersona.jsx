import React from 'react';
import OrdenesDeVentaPersonaTable from './OrdenesDeVentaPersonaTable';
import NavigationBar from "../NavigationBar/NavigationBar";

export default function OrdenesDeVentaPersona(props)  {

    const usuario = !!props.location.state ? props.location.state.usuario : props.history.push("/LoginPersona");
    
    const content = () => {
        return (
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <OrdenesDeVentaPersonaTable usuario={usuario}/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
                <NavigationBar
                    name={"Mis ordenes de venta"}
                    isUser={true}
                    content={content()}
                    usuario={usuario}
                />
            </div>
            );
}
