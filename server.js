const express = require("express");
const router = require("./routes/routes");

const app = express();

//se encarga de analizar los datos JSON en el cuerpo de las solicitudes.
app.use(express.json());
//e encarga de analizar los datos codificados en URL en el cuerpo de las solicitudes.
app.use(express.urlencoded({ extended: true }));

//Traer rutas

app.use(router);

app.listen(3000, () => console.log("Servidor se ejecuta en el puerto 3000"));
