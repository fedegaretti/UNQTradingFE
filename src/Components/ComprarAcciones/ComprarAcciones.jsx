import React from 'react';
import ComprarAccionesTable from './ComprarAccionesTable';
import NavigationBar from "../NavigationBar/NavigationBar";

export default function ComprarAcciones(props)  {
    const usuario = !!props.location.state ? props.location.state.usuario : props.history.push("/LoginUsuario");
    const content = () => {
        return (
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-sm pt-5">
                        <ComprarAccionesTable/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavigationBar
                name={"Comprar acciones"}
                isUser={true}
                content={content()}
                usuario={usuario}
            />
        </div>
    );
}