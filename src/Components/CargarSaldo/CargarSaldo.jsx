import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function CargarSaldo(props) {
    const content = () => {

    }

    return (
        <div>
            <NavigationBar
                name={"Cargar saldo"}
                isUser={true}
                content={content()}
            />
        </div>
    );
}