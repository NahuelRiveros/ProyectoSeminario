import express from 'express';
import { showProductosM, showProductosF, showProductosColor, showProductosMarca, showProductosTalle, showProductosTipo, showProductosGenero } from '../controllers/productoShop.js';


const rutas = express.Router();

// obtener productos
rutas.post('/obtProductoM',showProductosM)
rutas.post('/obtProductoF',showProductosF)
rutas.get('/obtProductoTalle', showProductosTalle)
rutas.get('/obtProductoMarca', showProductosMarca)
rutas.get('/obtProductoColor', showProductosColor)
rutas.get('/obtProductoTipo', showProductosTipo)
rutas.get('/obtProductoGenero', showProductosGenero)


export default rutas