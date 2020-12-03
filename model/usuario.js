// definir modulos internos

const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");

//define el esquema de la coleccion de usuarios

const esquemaUsuario= new mongoose.Schema({
	nombre: String,
	correo: String,
	pass: String
});

// generar el json web token para la autenticacion

esquemaUsuario.methods.generateJWT = function () {

	return jwt.sign({
		_id: this.id,
		nombre: this.nombre,
		correo: this.correo,
	},"clave")
};

// Crear los export

const Usuario= mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario= Usuario;
module.exports.esquemaUsuario= esquemaUsuario;



