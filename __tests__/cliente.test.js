const ControllerCliente = require('../src/controllers/cliente.controller');

describe('Al crear un nuevo cliente', () => {
    test('Debe ser una funcion', () => {
        expect(typeof ControllerCliente.crearNuevoCliente).toBe('function');
    });
})