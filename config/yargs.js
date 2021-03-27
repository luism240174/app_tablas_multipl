const argv = require ('yargs')
                .option('f', {
                  alias: 'factor_1',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es el factor constante de la tabla de multiplicar'
                })
                .option('h', {
                  alias: 'limFactor2',
                  type: 'number',
                  default: 11,
                  describe: 'Opcion para limitar la tabla. No incluye el numero especificado'

                })
                .option('l', {
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Opcion para listar la tabla en consola'

                })
                .check((argv, option) => {
                  if (isNaN(argv.f)) {
                    throw 'El factor_1 tiene que ser un numero'
                  }
                  return true;
                })
                .argv;

module.exports = argv;
