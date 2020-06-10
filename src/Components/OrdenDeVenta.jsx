import React, {useState, useEffect} from 'react';
import {comprarAcciones, findOrdenDeVenta} from '../Service/RestService'
export default function OrdenDeVenta() {
    const [orden, setOrden] = useState('')

    useEffect(() => {
        findOrdenDeVenta(1).then(response => setOrden(response.data))
    })

    return (
        <div>
            <h1>precio {orden.precio}</h1>
            <h1>empresa {orden.nombreEmpresa}</h1>
            <h1>cantidad {orden.cantidadDeAcciones}</h1>
            <h1>fecha creacion {orden.fechaDeCreacion}</h1>
            <h1>fecha vencimiento {orden.fechaDeVencimiento}</h1>
        </div>
    )
}

function comprar() {
    comprarAcciones(1, 1)
}


