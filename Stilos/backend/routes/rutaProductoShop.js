import express from 'express';
import { showProductos, showProductosColor, showProductosMarca, showProductosTalle, showProductosTipo } from '../controllers/productoShop.js';


const rutas = express.Router();

// obtener productos
rutas.get('/obtProducto',showProductos)
rutas.get('/obtProductoTalle', showProductosTalle)
rutas.get('/obtProductoMarca', showProductosMarca)
rutas.get('/obtProductoColor', showProductosColor)
rutas.get('/obtProductoTipo', showProductosTipo)


export default rutas