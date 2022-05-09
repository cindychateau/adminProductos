const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, {timestamps: true, versionKey: false});
//Timestamps: creando campos de createdAt y updatedAt
//versonKey:false estamos eliminando el atributo _v

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;