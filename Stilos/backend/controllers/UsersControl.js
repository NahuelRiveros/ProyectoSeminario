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
    const user = await tbUser.findOne({ where: { email: req.params.email }});
    if (!user){
      return res.send('No enxiste el correo ingresado')
    }
    try {
      const rta = await bcryptjs.compare(req.body.contrasena, user.contrasena)
      if (!rta) {
        return res.json("La contraseña no existe")
      }
      res.json(user)
      
    } catch (error) {

      res.json(error)
      
    }
};

// Crear un registro

export const newUser = async (req, res) => {
  try {
    const {email,contrasena} = req.body
    const Existe = await tbUser.findOne({ where: { email: email }});
    if (Existe){
      res.json({msg:'Usuario ya existe'})
    }
    else {
      let claveHash = await bcryptjs.hash(contrasena,8)
      const creado = await tbUser.create({email,contrasena:claveHash});
      res.json({ msg: "Creado correctamente" });
    }
  } catch (error) 
  {
    res.json({ msg: error.message });
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
