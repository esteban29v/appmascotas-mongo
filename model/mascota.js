// modulos internos

const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");

//esquema

const esquemaMascota= new mongoose.Schema({

	idUsuario: String,
	nombre: String,
	tipo: String,
	descripcion: String
});

//exports

const Mascota= mongoose.model("mascota",esquemaMascota);
module.exports.Mascota= Mascota;

