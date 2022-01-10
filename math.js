const Math = {};

const add = (a,b) => a + b ;
const substract = (a,b) => a - b ;
const multiply = (a,b) => a * b ;
const divide = (a,b) => (b == 0) ? console.log('No se puede dividir por 0') : a / b ;


// exports.sumar = add; //------------- esto exporta una propiedad de un objeto
// exports.restar = substract;
// exports.multiplicar = multiply;
// exports.dividir = divide;

Math.sumar = add;
Math.restar = substract;
Math.multiplicar = multiply;
Math.dividir = divide;

module.exports = Math; //---- el module.exports permite exportar objetos funciones variables 



//ejemplo de funcion
const saludo = (name)=> console.log(`Buen día ${name} !`);
exports.hola = saludo;

