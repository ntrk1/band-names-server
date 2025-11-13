const express = require('express');
const path = require('path')
require('dotenv').config();
const app = express();

//IMPORTACIONES



//INYECCION DEL PAQUETE SOCKET.IO
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




//INYECCION DEL HTML
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



//MAIN
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('puertos', process.env.PORT)
})