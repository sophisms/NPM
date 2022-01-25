const express = require('express');
const app = express();

const port = 3000;

//MiddleWare (Acción intermedia)
app.use(express.static(__dirname + "/public")) //Entra a la carpeta public

app.get('/', (req, res) =>{
  res.send('Mi respuesta express')
})
app.get('/mantenimiento', (req, res) =>{
 res.send('Estas dentro de mantenimiento')
})

app.use(express.static(__dirname + "/public"))

//404
app.use((req, res, next) =>{
 res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log('Servidor en el puerto', port)
})
