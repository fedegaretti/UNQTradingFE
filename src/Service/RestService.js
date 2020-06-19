import axios from 'axios';

const API_URL = "http://localhost:8080/api"
const ORDENES_DE_VENTA ="/venta/all?nombreEmpresa="
const SAVE_ORDEN_VENTA = "/venta/save"
const SAVE_USUARIO = "/usuario/save"
const COMPRAR_ACCIONES = "/usuario/buy?"
const FIND_ORDEN_DE_VENTA = "/venta/find?ordenId="
const FIND_ACCIONES = "/usuario/acciones?usuarioId="
const FIND_ORDENES_DE_VENTA = "/venta/ordenes"
const REGISTRAR_EMPRESA = "/empresa/register"
const LOGIN_USUARIO = "/usuario/login?"

export const RestService = {
    GET: {
        findOrdenDeVenta: function(ordenId)  {
            return axios.get(API_URL + FIND_ORDEN_DE_VENTA + ordenId)
        },
        findOrdenesDeVentaByEmpresa: function(nombreEmpresa) {
            return axios.get(API_URL + ORDENES_DE_VENTA + nombreEmpresa)
        },
        findAccionesByUser: function(userId) {
            return axios.get(API_URL + FIND_ACCIONES + userId)
        },
        findAllOrdenesDeVenta : function(){
            return axios.get(API_URL + FIND_ORDENES_DE_VENTA )
        }
    },
    POST: {
        saveOrdenDeVenta: function(ordenDeVenta) {
            return axios.post(API_URL + SAVE_ORDEN_VENTA, ordenDeVenta)
        },
        comprarAcciones: function(ordenId, usuarioId) {
            return axios.post(API_URL + COMPRAR_ACCIONES + "ordenId=" + ordenId + "&usuarioId=" + usuarioId)
        },
        registrarEmpresa: function(empresa) {
            return axios.post(API_URL + REGISTRAR_EMPRESA, empresa)
        },
        saveUsuario: function(usuario) {
            return axios.post(API_URL + SAVE_USUARIO, usuario)
        },
        loginUsuario: function (dni, username, password) {
            return axios.post(API_URL + LOGIN_USUARIO + "dni=" + dni + "&username=" + username + "&password=" + password)
        }
    },
    PUT: {

    },
    DELETE: {

    }
}
