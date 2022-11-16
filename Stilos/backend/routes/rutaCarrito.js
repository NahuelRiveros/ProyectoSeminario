import express from 'express';
import { CarrAllProd,CarrAddProd,CarrDelProd,AccComprar,HistoryCompras,HistCompDetails } from "../controllers/carritoControllers.js"

const rutas = express.Router();

rutas.post('/allProds/:id',CarrAllProd)

rutas.post('/newCarrProd/:id', CarrAddProd)

rutas.delete('/DelProd/:id',CarrDelProd)

rutas.post('/Comprar/:id', AccComprar)

rutas.get('/historial/:id', HistoryCompras)

rutas.get('/historial/detalles/:id', HistCompDetails)

export default rutas;

