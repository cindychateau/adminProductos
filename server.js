const express = require ("express");
const app = express();
const cors = require("cors");

//Para usar json
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000"
    })
);


//Inicializa BD
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/producto.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log("Server listo!"));