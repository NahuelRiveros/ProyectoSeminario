
import {
  tbProductoShop,
  tbTipoProducto,
  tbTalleProducto,
  tbMarcaProducto,
  tbColorProducto,
  tbGeneroProducto
} from "../models/modelPorductoShop.js";
import {Op} from 'sequelize';

// Todos los productos
export const showProductosM = async (req, res) => {
  const listProd = []
  const allProd = await tbProductoShop.findAll({where: {fk_genero :{[Op.or]:[1,3]}}, raw: true });
  const allMarcas = await tbMarcaProducto.findAll({ raw: true })
  const allTalles = await tbTalleProducto.findAll({ raw: true })
  const allColores = await tbColorProducto.findAll({ raw: true })
  const allTipos = await tbTipoProducto.findAll({ raw: true })
  const allGeneros = await tbGeneroProducto.findAll({ raw: true })
  try {
    // 0000
    if (!req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){

      for (let i = 0; i < allProd.length; i++) {
        listProd[i] = {}
        listProd[i].id = allProd[i].id
        listProd[i].existencia_producto = allProd[i].existencia_producto
        listProd[i].img = allProd[i].imagen_producto
        listProd[i].precio = allProd[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (allProd[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (allProd[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (allProd[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (allProd[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (allProd[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1000
    if(req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle : req.body.talle}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0100
    if(!req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0010
    if(!req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_marca: req.body.marca}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0001
    if(!req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_tipo: req.body.tipo}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }

    // 1100
    if (req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_color:req.body.color}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1010
    if (req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_marca:req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1001
    if (req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0110
    if (!req.body.talle && req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_marcar:req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0101
    if (!req.body.talle && req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0011
    if (!req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_marca: req.body.marca,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0111
    if (!req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1011
    if (req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1101
    if (req.body.talle && req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1110
    if (req.body.talle && req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_marca: req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    } 
    // 1111 
    if (req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const showProductosF = async (req, res) => {
  const listProd = []
  const allProd = await tbProductoShop.findAll({where: {fk_genero :{[Op.or]:[2,3]}}, raw: true });
  const allMarcas = await tbMarcaProducto.findAll({ raw: true })
  const allTalles = await tbTalleProducto.findAll({ raw: true })
  const allColores = await tbColorProducto.findAll({ raw: true })
  const allTipos = await tbTipoProducto.findAll({ raw: true })
  const allGeneros = await tbGeneroProducto.findAll({ raw: true })
  try {
    // 0000
    if (!req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){

      for (let i = 0; i < allProd.length; i++) {
        listProd[i] = {}
        listProd[i].id = allProd[i].id
        listProd[i].existencia_producto = allProd[i].existencia_producto
        listProd[i].img = allProd[i].imagen_producto
        listProd[i].precio = allProd[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (allProd[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (allProd[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (allProd[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (allProd[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (allProd[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1000
    if(req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle : req.body.talle}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0100
    if(!req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0010
    if(!req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_marca: req.body.marca}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0001
    if(!req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_tipo: req.body.tipo}})
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }

    // 1100
    if (req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_color:req.body.color}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1010
    if (req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_marca:req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1001
    if (req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0110
    if (!req.body.talle && req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_marcar:req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0101
    if (!req.body.talle && req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0011
    if (!req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_marca: req.body.marca,fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 0111
    if (!req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1011
    if (req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1101
    if (req.body.talle && req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
    // 1110
    if (req.body.talle && req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_marca: req.body.marca}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    } 
    // 1111 
    if (req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      for (let i = 0; i < productos.length; i++) {
        listProd[i] = {}
        listProd[i].id = productos[i].id
        listProd[i].existencia_producto = productos[i].existencia_producto
        listProd[i].img = productos[i].imagen_producto
        listProd[i].precio = productos[i].precio_unitario
        
        for (let a = 0; a < allMarcas.length; a++) {
          if (productos[i].fk_marca == allMarcas[a].id) {
            listProd[i].marca = allMarcas[a].marca
          }
        } 
        for (let b = 0; b < allTalles.length; b++) {
          if (productos[i].fk_talle == allTalles[b].id) {
            listProd[i].talle = allTalles[b].talle
          }
        }
        for (let c = 0; c < allColores.length; c++) {
          if (productos[i].fk_color == allColores[c].id) {
            listProd[i].color = allColores[c].color
          }
        }
        for (let d = 0; d < allTipos.length; d++) {
          if (productos[i].fk_tipo == allTipos[d].id) {
            listProd[i].tipo = allTipos[d].tipo_producto
          }
        }
        for (let e = 0; e < allGeneros.length; e++) {
          if (productos[i].fk_genero == allGeneros[e].id) {
            listProd[i].genero = allGeneros[e].genero
          }
        }
      
      
    }
      return res.json(listProd)
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Los tipos de productos
export const showProductosTipo = async (req, res) => {
  try {
    const productos = await tbTipoProducto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Marca de los productos
export const showProductosMarca = async (req, res) => {
  try {
    const productos = await tbMarcaProducto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Color de los productos

export const showProductosColor = async (req, res) => {
  try {
    const productos = await tbColorProducto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Talle de los productos
export const showProductosTalle = async (req, res) => {
  try {
    const productos = await tbTalleProducto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Genero de los productos
export const showProductosGenero = async (req, res) => {
  try {
    const productos = await tbGeneroProducto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
