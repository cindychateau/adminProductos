const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minLength: [2, "Nombre debe tener al menos 2 caracteres."]
    },
    precio: Number,
    descripcion: {
        type: String,
        required: [true, "Descripción obligatoria."],
        minLength: [5, "Descripción debe tener al menos 5 caracteres."]
    }
}, {timestamps: true, versionKey: false});
//Timestamps: creando campos de createdAt y updatedAt
//versonKey:false estamos eliminando el atributo _v

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;