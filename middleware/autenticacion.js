// referenciar los modulos internos node

const jwt= require("jsonwebtoken");

//crear la funcion middleware

function autenticacion (req,res,next){
	let jwtToken = req.header("Authorization");
	
	jwtToken= jwtToken.split(" ")[1];

	// si no existe token
	
	if (!jwtToken) return res.status(400).send("No existe el Token para validar")

	// si existe un jsonwebtoken
	
	try{
		const payload= jwt.verify(jwtToken,"clave");
		req.usuario= payload;
		next();
	}
	catch(error){
		res.status(400).send("Token no valido, no tiene autorizacion");
	}

}

//se hacen los exports

module.exports= autenticacion;
