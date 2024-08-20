const ClienteService = require('../services/cliente.service');
const ClienteValidator = require('../validators/cliente.validator');

class ClienteController {
    static async crearNuevoCliente(payload = {}) {
        await ClienteValidator.crearNuevoCliente(payload);
        return await ClienteService.crearNuevoCliente(payload);
    }
    static async obtenerPromedioClientes() {
        try {
            return await ClienteService.obtenerPromedioClientes();
        } catch (error) {
            return error;
        }
    }
    static async obtenerClientes() {
        try {
            return await ClienteService.obtenerClientes();
        } catch (error) {
            return error;
        }
    }
}

module.exports = ClienteController;
