import express from 'express';
import { CarrAllProd,CarrAddProd } from "../controllers/carritoControllers.js"

const rutas = express.Router();

rutas.post('/allProds/:id',CarrAllProd)

rutas.post('/newCarrProd/:id', CarrAddProd)

export default rutas;