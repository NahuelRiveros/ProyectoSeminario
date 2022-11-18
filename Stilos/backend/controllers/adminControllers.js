import { tbCompras, tbProd, tbMarcas, tbTalles, tbColores, tbGeneroProd, tbTipoProd } from "../models/modelAdmins.js";
import { tbPersonaPerfil } from "../models/modelPersona.js";
import { Op } from "sequelize";

//Controladores de productos

export const allProd = async (req, res) => {
  try {
    const allProd = await tbProd.findAll({ raw: true });
    const allMarcas = await tbMarcas.findAll({ raw: true })
    const allTalles = await tbTalles.findAll({ raw: true })
    const allColores = await tbColores.findAll({ raw: true })
    const allTipos = await tbTipoProd.findAll({ raw: true })
    const allGeneros = await tbGeneroProd.findAll({ raw: true })
    function createStockJson(allStock = []) {
      for (let i = 0; i < allProd.length; i++) {
        allStock[i] = {}
        allStock[i].existencias = allProd[i].existencia_producto
        for (let a = 0; a < allMarcas.length; a++) {
          if (allProd[i].fk_marca == allMarcas[a].id) {
            allStock[i].marca = allMarcas[a].marca
          }
        }
        for (let b = 0; b < allTalles.length; b++) {
          if (allProd[i].fk_talle == allTalles[b].id) {
            allStock[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (allProd[i].fk_color == allColores[c].id) {
            allStock[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (allProd[i].fk_tipo == allTipos[d].id) {
            allStock[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (allProd[i].fk_genero == allGeneros[e].id) {
            allStock[i].genero = allGeneros[e].genero
          }
        }
        if (allProd[i].existencia_producto < 75) {
          allStock[i].stock = "Poco stock"
        }
        if (allProd[i].existencia_producto == 0) {

          allStock[i].stock = "Sin Stock"
        }
        if (allProd[i].existencia_producto >= 75) {
          allStock[i].stock = "Buen Stock"
        }
      }
      return allStock
    }
    const resultStock = createStockJson()
    res.json(resultStock)
  } catch (error) {
    res.json({ msg: error.message });
  }
}

export const oneProd = async (req, res) => {
  try {
    const prod = await tbProd.findOne({ where: { id: req.params.id } });
    if (!prod) {
      return res.json({ error: "El producto no existe" })
    } else {
      return res.json(prod)
    }
  } catch (error) {
    return res.json("error")
  }
}

export const newProd = async (req, res, next) => {
  try {
    const archivo = req.files.archivo;
    const nombreFile = archivo.name
    const path = __dirname + '/../imagenes/' + nombreFile
    const imagen = path
    const { descripcion, existencia, precio, talle, color, genero, marca, tipo } = req.body
    const creado = await tbProd.create({ descripcion: descripcion, existencia_producto: existencia, imagen_producto: imagen, precio_unitario: precio, fk_talle: talle, fk_color: color, fk_genero: genero, fk_marca: marca, fk_tipo: tipo });

    return (res.json({ msg: "Creado correctamente" }));
  } catch (error) {
    return (res.json({ msg: error.message }));
  }
};

export const updProd = async (req, res) => {
  try {
    const { existencia, imagen, precio, talle, color, genero, marca, tipo } = req.body
    tbProd.update({ existencia_producto: existencia, imagen_producto: imagen, precio_unitario: precio, fk_talle: talle, fk_color: color, fk_genero: genero, fk_marca: marca, fk_tipo: tipo }, { where: { id: req.params.id } });
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

export const getVentasM = async (req, res) => {
  let año = req.query.año
  let fechaMinima = año + "-" + "01" + "-" + "01"
  let fechaMaxima = año + "-" + "12" + "-" + "31"
  let ventasJSON = []
  try {
    const allVentas = await tbCompras.findAll({ where: { createdAt: { [Op.between]: [fechaMinima, fechaMaxima] } } })
    res.json(allVentas)
  } catch (error) {
    res.json({ msg: error.message })
  }
}

