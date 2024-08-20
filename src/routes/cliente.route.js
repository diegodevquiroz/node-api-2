const route = require('express').Router();
const ControllerCliente = require('../controllers/cliente.controller');
const ClienteValidator = require('../validators/cliente.validator');
const Responses = require('../constants/responsesMessages');

route.get('/', (req, res) => {
    res.json({message: 'Ok', date: new Date()})
})

route.post('/cliente-nuevo', async (req, res) => {
    try {
        const payload = req.body;
        await ControllerCliente.crearNuevoCliente(payload);
        res.status(200).json({ message: Responses.EXECUTE_OK });
    } catch (error) {
        res.status(500).json({ message: Responses.EXECUTE_FAIL, error: [error.details[0].message] });
    }
});

route.get('/clientes-promedio', async (req, res) => {
    try {
        const promedio = await ControllerCliente.obtenerPromedioClientes();
        res.status(200).json({ message: Responses.EXECUTE_OK , promedio });
    } catch (error) {
        res.status(500).json({ message: Responses.EXECUTE_FAIL, error: [error.details[0].message] });
    }
});

route.get('/clientes', async (req, res) => {
    try {
        const clientes = await ControllerCliente.obtenerClientes();
        res.status(200).json({ message: Responses.EXECUTE_OK , clientes });
    } catch (error) {
        res.status(500).json({ message: Responses.EXECUTE_FAIL, error: [error.details[0].message] });
    }
});

module.exports = route;