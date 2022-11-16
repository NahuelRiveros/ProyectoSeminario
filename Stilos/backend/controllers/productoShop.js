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
    const productos = await tbProductoShop.findAll();
    res.json(productos);
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
