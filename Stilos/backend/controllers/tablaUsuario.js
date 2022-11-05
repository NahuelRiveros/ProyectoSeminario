// importamos los medelos desarrollados

import { tbUser } from "../models/modelRegistroUsuario.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validarToken } from '../middleware/Auth.js'
//** Metodos para el CRUD **/



// TODOS LOS USUARIO REGISTRADOS
export const allUsers = async (req, res) => {
  try {
    const allUsuarios = await tbUser.findAll();
    res.json(allUsuarios);
  } catch (error) {
    res.json({ msg: error.message });
  }
};


// BUSCAS SI EXISTE UN USUARIO Y LOGEAR
export const oneUser = async (req, res) => {
  const user = await tbUser.findOne({ where: { email: req.body.email } }); //al cambiar a metodo POST, el email viene junto a la contraseña en el Body. Siendo asi, tampoco se necesita del parametro, por lo que se saco de Routes
  if (!user) {
    return res.json({ error: "Acceso Invalidado Error de Email " })
  }
  const { id, email, contrasena } = user

  // comparacion de contraseñas, si es valido logea con un token de acceso
  bcryptjs.compare(req.body.contrasena, contrasena).then(async (match) => {
    if (!match) {
      res.json({ error: "Acceso Invalidado Error de contraseña" });
    }

    else {
      //devuelvo al Frontend
      jwt.sign({ id, email }, "accessToken", (err, token) => {
        res.json({ Token: token, id, email });
      });



    }


  })
}











// CREARCION DE UN USUARIO NUEVO

export const newUser = async (req, res) => {
  try {
    const { email, contrasena } = req.body
    const Existe = await tbUser.findOne({ where: { email: email } });
    if (Existe) {
      return (res.json({ msg: 'Usuario ya existe' }))
    }
    else {
      let claveHash = await bcryptjs.hash(contrasena, 8)
      const creado = await tbUser.create({ email, contrasena: claveHash });
      return (res.json({ msg: "Creado correctamente" }));
    }
  } catch (error) {
    return (res.json({ msg: error.message}));
  }
};





// ACTUALIZACION DE USUARIO
export const udpUser = async (req, res) => {
  try {
    tbUser.update(req.body, { where: { id: req.params.id } });

    res.json({ msg: "Acualizado correctamente" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};





// ELIMINAR UN USUARIO



export const delUser = async (req, res) => {
  try {
    await tbUser.destroy({ where: { id: req.params.id } });
    res.json({ msg: "regsitro eliminado" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

//
export const authLog = async (req, res) => {
  res.json(req.user)
}
