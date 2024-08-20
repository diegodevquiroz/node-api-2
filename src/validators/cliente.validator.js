const Joi = require('@hapi/joi');

class ClienteValidator {
    static async crearNuevoCliente(payload) {
        const schema = Joi.object()
        .keys({
            nombre: Joi.string()
                .required()
                .max(500),
            apellido: Joi.string()
                .required()
                .max(500),
            fechaNacimiento: Joi.string()
            .required()
            .max(500)
            }
        );
        await schema.validateAsync({ nombre: payload.nombre, apellido: payload.apellido, fechaNacimiento: payload.fechaNacimiento });
    }
}

module.exports = ClienteValidator;