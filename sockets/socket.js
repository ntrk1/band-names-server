const {io} = require('../index');
const Band = require('../models/band');
const ListBands = require('../models/list_bands');
const bands = new ListBands();


bands.addBand(new Band('I'));
bands.addBand(new Band('II'));
bands.addBand(new Band('III'));





//CONEXION DEL CLIENTE A LA PAGINA
 io.on('connection', client => {
     console.log('cliente conectado');
     client.emit('bands-sever', bands.getBands());
     client.on('disconnect', () => {
         console.log('cliente desconectado');
     });



    client.on('mensaje', (payload) => {

        console.log('Nueva conexion', payload);
        io.emit('registro', {server: 'Acceso registrado'});
    });



    client.on('emitir-mensaje', (payload) => {
        console.log('Nueva conexion', payload);
        client.broadcast.emit('nuevo-mensaje', payload);
    });

    client.on('voto', (payload) => {
        bands.voteBand(payload.id);
        io.emit('bands-sever', bands.getBands());
    });

    client.on('new-band', (payload) => {
        const newBand = new Band(payload.name);
        bands.addBand(newBand);
        io.emit('bands-sever', bands.getBands());
    });

    client.on('delete-band', (payload) => {
        bands.deleteBand(payload.id);
        io.emit('bands-sever', bands.getBands());
    });


 });


