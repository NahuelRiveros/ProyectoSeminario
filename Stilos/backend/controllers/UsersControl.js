// importamos los medelos desarrollados

import {tbUser} from "../models/regModel.js";
import bcryptjs from 'bcryptjs'
//** Metodos para el CRUD **/


// SIMPRE UTILIZAR ASYNC y AWAIT
// Mostrar todos los registros
export const allUsers = async (req, res) => {
  try {
    const allUsuarios = await tbUser.findAll();
    res.json(allUsuarios);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
// Buscar Usuario si exite y logear
export const oneUser = async (req, res) => {
    const user = await tbUser.findOne({ where: { email: req.body.email }}); //al cambiar a metodo POST, el email viene junto a la contraseña en el Body. Siendo asi, tampoco se necesita del parametro, por lo que se saco de Routes
    console.log(req)
    if (!user){
      return res.json({msg:'No existe el correo ingresado'})
    }
    try {
      console.log("aqui")
      const rta = await bcryptjs.compare(req.body.contrasena, user.contrasena)
      console.log(rta)
      if (!rta) {
        return res.json({msg:"Mal contraseña"})
      }
      res.json(user)
      
    } catch (error) {
      console.log(user)

      res.json({msg:"Error de Axios"})
      
    }
};

// Crear un registro

export const newUser = async (req, res) => {
  try {
    const {email,contrasena} = req.body
    const Existe = await tbUser.findOne({ where: { email: email }});
    if (Existe){
      return(res.json({msg:'Usuario ya existe'}))
    }
    else {
      let claveHash = await bcryptjs.hash(contrasena,8)
      const creado = await tbUser.create({email,contrasena:claveHash});
      return(res.json({ msg: "Creado correctamente" }));
    }
  } catch (error) 
  {
    return(res.json({ msg: error.message }));
  }
};

// Actualizar un registro
export const udpUser = async (req, res) => {
  try {
    tbUser.update(req.body, { where: { id: req.params.id } });
    res.json({ msg: "Acualizado correctamente" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
// Eliminar un registro
export const delUser = async (req, res) => {
  try {
    await tbUser.destroy({ where: { id: req.params.id } });
    res.json({ msg: "regsitro eliminado" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
