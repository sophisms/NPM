const http = require("http");
const server = http.createServer(
    (req,res) => {
        res.end("Respuesta 25 a tu solicitud Briana")
    } 
)

const puerto = 3000;
server.listen(puerto, () => {
    console.log("Escuchando solicitud")
})