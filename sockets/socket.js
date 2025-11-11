const {io} = require('../index');


//CONEXION DEL CLIENTE A LA PAGINA
io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje', {admin: 'Nuevo Mensaje'});
    });
});