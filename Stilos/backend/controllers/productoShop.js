import {
  tbProductoShop,
  tbTipoProducto,
  tbTalleProducto,
  tbMarcaProducto,
  tbColorProducto,
} from "../models/modelPorductoShop.js";

// Todos los productos
export const showProductos = async (req, res) => {
  try {
    if (!req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll();
      res.json(productos)
    }
    if(req.body.talle && !req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle : req.body.talle}})
      res.json(productos)
    }
    if(!req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color}})
      res.json(productos)
    }
    if(!req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.marca}})
      res.json(productos)
    }
    if(!req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_tipo: req.body.tipo}})
      res.json(productos)
    }
    if (req.body.talle && req.body.color && !req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_color:req.body.color}});
      res.json(productos)
    }
    if (req.body.talle && !req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_marca:req.body.marca}});
      res.json(productos)
    }
    if (req.body.talle && !req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle: req.body.talle,fk_tipo:req.body.tipo}});
      res.json(productos)
    }
    if (!req.body.talle && req.body.color && req.body.marca && !req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_marcar:req.body.marca}});
      res.json(productos)
    }
    if (!req.body.talle && req.body.color && !req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color: req.body.color,fk_tipo:req.body.tipo}});
      res.json(productos)
    }
    if (!req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_marca: req.body.marca,fk_tipo:req.body.tipo}});
      res.json(productos)
    }
    if (!req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      res.json(productos)
    }
    if (req.body.talle && !req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      res.json(productos)
    }
    if (req.body.talle && req.body.color && req.body.marca && req.body.tipo){
      const productos = await tbProductoShop.findAll({where: {fk_talle:req.body.talle, fk_color:req.body.color, fk_marca: req.body.marca, fk_tipo:req.body.tipo}});
      res.json(productos)
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
