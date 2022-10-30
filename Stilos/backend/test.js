// if (!user){
//   return res.json({msg:'correo Invalido'})
// }
// try {
//   const rta = await bcryptjs.compare(req.body.contrasena, contrasena).then(async (match)=>{
//     if (!match) res.json({error: "Acceso Invalidado Error de Email o contraseña"})

//   })
//     return res.json({msg:"Contraseña Invalida"})
//   }
  
//   const TOKEN = jwt.sign({id,email}, "HOLAMUNDO", {expiresIn: "1"} )
//   res.json({msg:'Logeado',Token : TOKEN})
  
// } catch (error) {
//   res.json({msg:error})
  
// }
// };


// front
await axios.post(URI, { email: email, contrasena: contrasena })
        .then((res) => {
          if (res.data.msg == "No existe el correo ingresado") {
            alert("El usuario no existe")
          } else if (res.data.msg == "Mal contraseña") {
            alert("La contraseña es incorrecta")
          } else if (res.data.msg == "Error de Axios") {
            alert("Erros de Axios")
          } else {
            console.log(`Usuario ${res.data.msg}, ${res.data.Token}`)
          }
        })



if (!user){
  return res.json({msg:'correo Invalido'})
}
try {
  const rta = await bcryptjs.compare(req.body.contrasena, contrasena)
  if (!rta) {
    return res.json({msg:"Contraseña Invalida"})
  }
  
  const TOKEN = jwt.sign({id,email}, "HOLAMUNDO", {expiresIn: "1"} )
  res.json({msg:'Logeado',Token : TOKEN})
  
} catch (error) {
  res.json({msg:error})
  
}
};
