//modulos internos

const express= require("express");
const router= express.Router();

const {Mascota}= require("../model/mascota");
const {Usuario} = require("../model/usuario");

const autenticacion= require("../middleware/autenticacion");

//ruta

router.post("/",autenticacion,async(req, res)=> {

	//definimos el id del usuario validado
	const usuario= await Usuario.findById(req.usuario._id);
	const mascotaUsuario= await Mascota.findOne({tipo: req.body.tipo,idUsuario: usuario._id});

	//en caso que no exista el usuario
	if (!usuario) return res.status(400).send("El usuario no existe en la base de datos");

	if (mascotaUsuario) 
		return res.status(400).send("El usuario ya tiene registrada esta clase de mascota");
	//si el usuario existe insertamos la mascota con su id 

	const mascota= new Mascota ({

		idUsuario: usuario._id,
		nombre: req.body.nombre,
		tipo: req.body.tipo,
		descripcion: req.body.descripcion,
	});

	//enviamos el objeto
	const result= await mascota.save();
	res.status(200).send(result);

});

//exports
module.exports = router;

