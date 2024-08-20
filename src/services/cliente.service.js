const ClienteDb = require('../db/cliente.db');
const moment = require('moment-timezone')

class ClienteService {
    static async crearNuevoCliente(payload = {}) {
        await ClienteDb.crearNuevoCliente(payload);
    }
    static async obtenerPromedioClientes() {
        const listadoClientes =  await ClienteDb.obtenerClientes();
        let totalAnios = 0;
        const totalClientes = listadoClientes.length;
        listadoClientes.forEach((cliente) => {
            const diff = moment().diff(cliente.fechaNacimiento, 'years');
            totalAnios = totalAnios + diff;
        })
        return (totalAnios/totalClientes).toFixed(1);
    }
    static async obtenerClientes() {
        return await ClienteDb.obtenerClientes();
    }
}

module.exports = ClienteService;
