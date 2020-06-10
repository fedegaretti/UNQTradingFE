import axios from 'axios';

export const API_URL = "http://localhost:8080/api"
export const ORDENES_DE_VENTA ="/venta/all?nombreEmpresa="
export const SAVE_ORDEN_VENTA = "/venta/save"
export const COMPRAR_ACCIONES = "/usuario/buy?"
export const FIND_ORDEN_DE_VENTA = "/venta/find?ordenId="
export const findOrdenesDeVentaByEmpresa = (nombreEmpresa) => {
    return axios.get(API_URL + ORDENES_DE_VENTA + nombreEmpresa)
}

export const saveOrdenDeVenta = (ordenDeVenta) => {
    return axios.post(API_URL + SAVE_ORDEN_VENTA, ordenDeVenta)
}

export const comprarAcciones = (ordenId, usuarioId) => {
    return axios.post(API_URL + COMPRAR_ACCIONES + "ordenId=" + ordenId + "&usuarioId=" + usuarioId)

}

export const findOrdenDeVenta = (ordenId) => {
    return axios.get(API_URL + FIND_ORDEN_DE_VENTA + ordenId)
}
