import express from 'express';
import { showProductos, showProductosColor, showProductosGenero, showProductosMarca, showProductosTalle, showProductosTipo } from '../controllers/productoShop.js';


const rutas = express.Router();

// obtener productos
rutas.post('/obtProducto',showProductos)
rutas.get('/obtProductoTalle', showProductosTalle)
rutas.get('/obtProductoMarca', showProductosMarca)
rutas.get('/obtProductoColor', showProductosColor)
rutas.get('/obtProductoTipo', showProductosTipo)
rutas.get('/obtProductoGenero', showProductosGenero)


export default rutas