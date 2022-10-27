// importamos los medelos desarrollados

import {tbUser,tbUserInsert, tbPers} from "../models/blogModel.js";

//** Metodos para el CRUD **/

// Mostrar todos los registros

// SIMPRE UTILIZAR ASYNC y AWAIT
export const obtRegistros = async (req, res) => {
  try {
    const allUsuarios = await tbUser.findAll();
    res.json(allUsuarios);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
export const obtPers = async (req, res) => {
  try {
    const allUsuarios = await tbPers.findAll();
    res.json(allUsuarios);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
// Mostrar un registro
export const obtUnRegistro = async (req, res) => {
  try {
    const unUsuario = await tbUser.findAll({ where: { id: req.params.id } });
    res.json(unUsuario[0]);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
// Crear un registro

export const crearRegistro = async (req, res) => {
  try {
    const creado = await tbUserInsert.create(req.body);
    res.json({ msg: "Creado correctamente" });
  } catch (error) 
  {
    res.json({ msg: error.message });
  }
};

// Actualizar un registro
export const auctRegistro = async (req, res) => {
  try {
    tbUser.update(req.body, { where: { id: req.params.id } });
    res.json({ msg: "Acualizado correctamente" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
// Eliminar un registro
export const elimRegistro = async (req, res) => {
  try {
    await tbUser.destroy({ where: { id: req.params.id } });
    res.json({ msg: "regsitro eliminado" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
