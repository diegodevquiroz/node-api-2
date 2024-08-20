const ClienteCnn = require('./connection/cliente.cn');
const QUERY_CONSTANS = require('../constants/queryConstansDomain');

class ClienteDb {
    static async crearNuevoCliente(payload = {}) {
        await ClienteCnn.executeQueryMySql(QUERY_CONSTANS.CREAR_NUEVO_CLIENTE, {
            nombre: payload.nombre,
            apellido: payload.apellido,
            fechaNacimiento: payload.fechaNacimiento
         });
    }
    static async  obtenerClientes() {
        const listadoClientes = await ClienteCnn.executeQueryMySql(QUERY_CONSTANS.LISTAR_CLIENTES, {});
        return listadoClientes;
    }
}

module.exports = ClienteDb;
