const express = require('express');
const app = express();
const port = process.env.PORT;
const routerCliente = require('./routes/cliente.route');
require('dotenv').config({ path: `../.config/test.env` })
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use('/cliente', routerCliente);

app.listen(port, function () {
    console.log('Running on port : ' + port);
})