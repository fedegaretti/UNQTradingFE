import React, {useEffect, useState} from 'react';
import {findOrdenesDeVentaByEmpresa} from '../Service/RestService'

export default function OrdenesDeVentaTable() {
    const [ordenes, handleOrdenes] = useState([])

    useEffect(() => {
        findOrdenesDeVentaByEmpresa("UNQ")
            .then(response => handleOrdenes(response.data))
    }, [])

    return (
         <div className="container row justify-content-center">
            <table className="table table-striped table-dark">
                <thead className="bg-secondary ">
                    <tr>
                        <th scope="col">Cantidad de acciones</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha Creación</th>
                        <th scope="col">Fecha Vencimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrdenesDeVenta()}
                </tbody>
            </table>
         </div>
    )

    function renderOrdenesDeVenta () {
        return ordenes.map(e => <tr>
            <td>{e.cantidadDeAcciones}</td>
            <td>{e.precio}</td>
            <td>{e.fechaDeCreacion}</td>
            <td>{e.fechaDeVencimiento}</td>
        </tr>)
    }
}
