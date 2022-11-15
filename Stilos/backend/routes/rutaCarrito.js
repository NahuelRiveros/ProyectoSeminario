import express from 'express';
import { CarrAllProd,CarrAddProd,CarrDelProd } from "../controllers/carritoControllers.js"

const rutas = express.Router();

rutas.post('/allProds/:id',CarrAllProd)

rutas.post('/newCarrProd/:id', CarrAddProd)

rutas.delete('/DelProd/:id',CarrDelProd)

export default rutas;