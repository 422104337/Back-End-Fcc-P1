// Importamos express
const express = require("express");

//Importamos cors
const cors = require("cors");

// Iniciamos la app
console.log("App de node arrancada");

//Creamos el servidor de express
const app = express();

//Agregamos el puerto
const puerto = 3900;

// Configuramos cors para que no nos de problemas
app.use(cors());

// Convertimos body a objeto js, sirve para tener un objeto js usable
app.use(express.json()); // Recibir datos con content-type app/json

app.use(express.urlencoded({extended: true})); //Sirve para que tambien reciba los datos de un formulario standar

//Rutas con documentos
const router = require("./router/router");

//Cargar las rutas bajo el prefijo /api
app.use("/api", router);


//Usar styles
app.use(express.static('styles'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

//Crear servidor y escuchar peticiones http
app.listen(puerto, () =>{
    console.log("Servidor corriendo en el puerto: " + puerto);

});
