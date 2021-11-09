const http = require('http')
const server = http.createServer((req, res) =>{
    res.end('Respuesta de la solicitud 2')
})

const puerto = 3000; // puerto de configuracion
server.listen(puerto, () =>{
    console.log('Escuchando solicitudes')
})