import React, {useState, useEffect} from 'react';
import {comprarAcciones, findOrdenDeVenta} from '../Service/RestService'
export default function OrdenDeVenta() {
    const [orden, setOrden] = useState('')

    useEffect(() => {
        findOrdenDeVenta(1).then(response => setOrden(response.data))
    })

    return (
        <div>
            <h1>Empresa: {orden.nombreEmpresa}</h1>
            <h1>Cantidad de Acciones: {orden.cantidadDeAcciones}</h1>
            <h1>Precio: {orden.precio}</h1>
            <h1>Fecha de Creacion: {orden.fechaDeCreacion}</h1>
            <h1>Fecha de Vencimiento: {orden.fechaDeVencimiento}</h1>
        </div>
    )
}

function comprar() {
    comprarAcciones(1, orden.id)
}


