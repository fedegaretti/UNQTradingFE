import React, {useState, useEffect} from 'react';
import {comprarAcciones} from '../Service/RestService'
export default function OrdenDeVenta() {
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [vencimiento, setVencimiento] = useState('');
    const [creacion, setCreacion] = useState('');
    const [nombreEmpresa, setNombre] = useState('');

    useEffect(() => {
        setCantidad(100)
        setPrecio(100)
        setVencimiento("2020-10-10")
        setCreacion("2020-06-06")
        setNombre("UNQ")
    })

    return (
        <div>
            <h1>{cantidad}</h1>
            <h1>{precio}</h1>
            <h1>{vencimiento}</h1>
            <h1>{creacion}</h1>
            <h1>{nombreEmpresa}</h1>
        </div>
    )
}

function comprar() {
    comprarAcciones(1, 1)
}

