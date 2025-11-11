
//IMPORTACIONES
require('dotenv').config();
const express = require('express');
const app = express();

//INYECCION DEL PAQUETE SOCKET.IO
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




//INYECCION DEL HTML
const path = require('path')
const publicPath = path.resolve(__dirname, 'public');



//MAIN
app.use(express.static(publicPath));
server.listen(process.env.PORT, (err) => {
if (err) throw new Error(err);
console.log('puertos', process.env.PORT)
})