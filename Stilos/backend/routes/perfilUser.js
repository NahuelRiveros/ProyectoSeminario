import express from 'express'; 
import {newPersona, obtPersona, updatePersona} from '../controllers/personaControl.js';
import {validarToken} from '../middleware/Auth.js';

const rutas = express.Router();
//ruta para guardar datos de la persona
rutas.post('/createPerfil/',validarToken,newPersona)
// ruta pra obtener datos de la persona
rutas.get('/obtDatos/',validarToken,obtPersona)
// ruta par actualizar datos de persona
rutas.put('/updPersona/:id', validarToken, updatePersona)

export default rutas