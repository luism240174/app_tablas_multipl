const fs = require('fs');
const colors = require('colors');



let crearArchivo = ( async (factor_1 = 5, limFactor2, listar) => {

  try{
    
    let resultados= '';
    for( let i = 1 ; i < limFactor2; i++){
    resultados += `${factor_1} x ${i} = ${factor_1*i}\n`};
    if (listar) {
      console.log(resultados.rainbow);
    }
    

    fs.writeFileSync(`./resultados/tabla_${factor_1}.txt`, resultados)
    return `The file tabla_${factor_1}.txt has been created`;


  }catch (err) {
    throw err;
  }

})

module.exports = {
  crearArchivo: crearArchivo
}
