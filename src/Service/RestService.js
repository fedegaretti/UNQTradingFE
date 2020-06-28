import axios from 'axios';

const API_URL = "http://localhost:8080/api"
const ORDENES_DE_VENTA ="/venta/all?nombreEmpresa="
const ORDENES_DE_VENTA_BY_CREADOR ="/venta/usuario/all?creadorId="
const SAVE_ORDEN_VENTA = "/venta/save"
const SAVE_USUARIO = "/usuario/save"
const COMPRAR_ACCIONES = "/usuario/buy?"
const FIND_ORDEN_DE_VENTA = "/venta/find?ordenId="
const FIND_ACCIONES = "/usuario/acciones?usuarioId="
const FIND_ORDENES_DE_VENTA = "/venta/ordenes"
const FIND_USUARIO = "/usuario/find?usuarioId="
const LOGIN_EMPRESA = "/empresa/login?"
const REGISTRAR_EMPRESA = "/empresa/register"
const LOGIN_PERSONA = "/usuario/login?"
const CARGAR_SALDO = "/usuario/cargarSaldo?"
const OBTENER_SALDO_PERSONA = "/usuario/obtenerSaldo?usuarioId="
const OBTENER_SALDO_EMPRESA = "/empresa/obtenerSaldo?usuarioId="

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
        },
        findAllOrdenesDeVentaByCreador : function(creadorId){
            return axios.get(API_URL + ORDENES_DE_VENTA_BY_CREADOR + creadorId )
        },
        findUser : function(userId){
            return axios.get(API_URL + FIND_USUARIO + userId)
        },
        getSaldo : function (userId, isUser) {
            let url = isUser ? OBTENER_SALDO_PERSONA : OBTENER_SALDO_EMPRESA
            return axios.get(API_URL + url + userId)
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
        loginEmpresa: function(cuit, password) {
            return axios.post(API_URL + LOGIN_EMPRESA + "cuit=" + cuit + "&password=" + password)
        },
        loginPersona: function (dni, username, password) {
            return axios.post(API_URL + LOGIN_PERSONA + "dni=" + dni + "&username=" + username + "&password=" + password)
        },
        cargarSaldo: function (dni, saldo) {
            return axios.post(API_URL + CARGAR_SALDO + "dni=" + dni + "&saldo=" + saldo)
        }
    },
    PUT: {

    },
    DELETE: {

    }
}
