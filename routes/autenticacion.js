// referencia los modulos internos del node js

const express=require("express");
const router= express.Router();

//invocar modulos internos

const {Usuario}=require("../model/usuario");

//ruta

router.post("/", async(req,res)=>{

	const usuario= await Usuario.findOne({correo: req.body.correo});

	//si no existe el correo

	if (!usuario) return res.status(400).send("Usuario o contraseña invalida");

	// si no existe la contraseña

	if (usuario.pass !== req.body.pass) return res.status(400).send("Usuario o contraseña invalida");

	// generar un JWT

	const jwtToken= usuario.generateJWT();
	res.status(200).send({jwtToken});

})

// exportar modulos

module.exports= router;

