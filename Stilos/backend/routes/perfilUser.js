import express from 'express'; 
import {newPersona} from '../controllers/personaControl.js';
import {validarToken} from '../middleware/Auth.js';

const rutas = express.Router();

rutas.post('/miPerfil/',validarToken,newPersona)


export default rutas