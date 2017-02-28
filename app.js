/**
 * Created by Jesus Francisco de Asis Salas Garcia on 28/02/2017.
 * Description: El archivo main con el que inicia esto.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo\n');
}).listen(1337, '127.0.0.1');
console.log('Servidor corriendo en http://127.0.0.1:1337');