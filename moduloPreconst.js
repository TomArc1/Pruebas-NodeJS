// ---------------- sistema operativo 
// const os = require ('os');

// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.version())
// console.log(os.release())
// console.log(`free mem: ${os.freemem()} bites`)
// console.log(`total mem: ${os.totalmem()} bites`)


// ----------------------- file system
const fs = require('fs');

// crear archivo

// fs.writeFile('./texto.txt', 'Hola mundo', function(err){
//     (err) ? console.log(err) : console.log('Archivo creado')
// })

//console.log(`Ultima linea de código `) // se ejecuta antes de la asincronía

// lectura de archivo
// fs.readFile('./texto.txt', (err, data)=>{
//     (err) ? console.log(err) : console.log(data.toString())
// })


// DATO: las acciones que se realizan ajenas a node (crear archivos, leerlos, etc), son ASINCRONAS

// ----------------------- servidor

const http = require('http');
// req -- request -- peticion
// res -- response -- respuesta

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write(`<h1>Hola Mundo desde 2022</h1>`);
//     res.end();
// }).listen(3000);



// --------------- otra manera:

// const handleServer = (req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write(`<h1>Hola Mundo </h1>`);
//     res.end();
// }
// http.createServer(handleServer).listen(3000);






// ---------------  y otra manera(mas ordenada):

// const handleServer = (req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write(`<h1>Hola Mundo </h1>`);
//     res.end();
// }
// const server = http.createServer(handleServer);

//le agregamos una funcion callback a la escucha del servidor 3000:

// server.listen(3000, ()=>{
//     console.log('Server on port 3000')
// })





// ------------ejemplo con npm 
//ver npmjs.com repo de codigos para node. Ver como instalar en la documentacion de cada repo de la pagina. La instalacion de un modulo crea la carpeta node modules y el archivo package-lock.json


const colors = require('colors')

// const handleServer = (req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write(`<h1>Hola Mundo </h1>`);
//     res.end();
// }
// const server = http.createServer(handleServer);
// server.listen(3000, ()=>{console.log('Server on port 3000'.rainbow)})

//----------------------------------------Info: que sucede si necesitamos ejecutar esto mismo desde otro computador? Si tenemos que descargar esto en otro pc, cómo hacemos para ejecutarlo correctamente? En principio a este archivo original se le debería correr en terminal el comando npm init, donde nos va a pedir una serie de datos que compondrían la meta informacion del archivo. Esto crearía un archivo llamado package.json que a futuro el otro ordenador leería. Lo importante de este archivo json es la parte de dependencies que lista la serie de modulos externos que instalamos en el ordenador original para que lo instale en el segundo ordenador y ejecutar el archivo correctamente. Esto no aplica a los modulos pre construidos de node (como 'http', 'OS', etc.). Otra parte importante de este archivo es el apartado scripts que podemos ejecutar y determinar qué se ejecuta. Si colocamos la palabra start(con su respectiva instruccion. Ver archivo package.json), que es propia del programa, simplemente se ejecuta el comando npm start. En cambio si queremos colocar otra palabra, por ejemplo, ensalada(y su instrucción), habría que ejecutar ese comando así: npm run ensalada.


// ----------------agregamos express 

const express = require('express');
const server = express();
server.get('/', (req, res)=>{ res.send('<h1>Hola mundo con Express y Node</h1>')});
server.listen(3000, ()=> console.log('Server on Port 3000'.blue) );