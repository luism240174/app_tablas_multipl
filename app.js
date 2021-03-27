require ('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ( './config/yargs' );
               

console.log(process.argv);
console.log(argv);
console.log('factor: yargs', argv.f);


crearArchivo(argv.f, argv.h, argv.l)
            .then( nombreArchivo => console.log(nombreArchivo.magenta, 'OK'))
            .catch(err => console.log(err));

