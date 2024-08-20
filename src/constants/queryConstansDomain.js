module.exports = {
    CREAR_NUEVO_CLIENTE: `INSERT INTO cliente (nombre, apellido, fechaNacimiento) VALUES (:nombre, :apellido, :fechaNacimiento)`,
    LISTAR_CLIENTES: `SELECT * FROM user`
}