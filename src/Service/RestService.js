import axios from 'axios';

export const API_URL = "http://localhost:8080/api"
export const ORDENES_DE_VENTA ="/venta/all?nombreEmpresa="

export const findOrdenesDeVentaByEmpresa = (nombreEmpresa) => {
    return axios.get(API_URL + ORDENES_DE_VENTA + nombreEmpresa)
}

