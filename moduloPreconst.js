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
// const fs = require('fs');

// crear archivo
// fs.writeFile('./texto.txt', 'Hola mundo', function(err){
//     (err) ? console.log(err) : console.log('Archivo creado')
// })
// console.log(`Ultima linea de código `) // se ejecuta antes de la asincronía

// lectura de archivo
// fs.readFile('./texto.txt', (err, data)=>{
//     (err) ? console.log(err) : console.log(data.toString())
// })

// ----------------------- servidor

const http = require('http');
// req -- request -- peticion
// res -- response -- respuesta

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write(`<h1>Hola Mundo </h1>`);
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
const colors = require('colors')

const handleServer = (req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(`<h1>Hola Mundo </h1>`);
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, ()=>{console.log('Server on port 3000'.magenta)})
