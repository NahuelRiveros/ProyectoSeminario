import { tbProd } from "../models/modelAdminProd.js";
import { tbPersonaPerfil } from "../models/modelPersona.js";
import { tbUserAdmin } from "../models/modelRegistroUsuario.js";

//Controladores de productos

export const allProd = async (req, res) => {
    try {
        const allProd = await tbProd.findAll();
        res.json(allProd);
      } catch (error) {
        res.json({ msg: error.message });
      }
}

export const oneProd = async (req, res) => {
  try {
    const prod = await tbProd.findOne({ where: { id : req.params.id } });
    if (!prod) {
      return res.json({ error: "El producto no existe" })
    } else {
        return res.json(prod)
    }
  } catch (error) {
    return res.json("error")
  }
  }

  export const newProd = async (req, res) => {
    try {
        const { existencia, imagen, precio, talle, color, genero, marca, tipo } = req.body
        const creado = await tbProd.create({ existencia_producto:existencia, imagen_producto:imagen, precio_unitario:precio, fk_talle:talle, fk_color:color, fk_genero:genero, fk_marca:marca, fk_tipo:tipo });
        
        return (res.json({ msg: "Creado correctamente" }));
    } catch (error) {
      return (res.json({ msg: error.message}));
    }
  };

  export const updProd = async (req, res) => {
    try {
      const { existencia, imagen, precio, talle, color, genero, marca, tipo } = req.body
      tbProd.update({ existencia_producto:existencia, imagen_producto:imagen, precio_unitario:precio, fk_talle:talle, fk_color:color, fk_genero:genero, fk_marca:marca, fk_tipo:tipo }, { where: { id: req.params.id } });
      res.json({ msg: "Producto actualizado correctamente" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  };

  export const delProd = async (req, res) => {
    try {
      await tbProd.destroy({ where: { id: req.params.id } });
      res.json({ msg: "Producto eliminado" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  };

//controladores de personas

export const contGenPersona = async (req, res) => {
  try {
      const allPerson = await tbPersonaPerfil.findAll();
      res.json(allPerson)

    } catch (error) {
      res.json({ msg: error.message });
    }
}


export const viewUsuarioAdmin = async (req, res) => {
 
  try {
      const allPerson = await tbUserAdmin.findAll();
      res.json(allPerson)

    } catch (error) {
      res.json({ msg: error.message });
    }
}