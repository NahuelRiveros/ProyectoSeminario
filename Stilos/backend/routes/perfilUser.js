import express from 'express'; 
import {deletePersona, newPersona, obtPersona, updatePersona} from '../controllers/personaControl.js';
import {validarToken} from '../middleware/Auth.js';

const rutas = express.Router();
//ruta para guardar datos de la persona
rutas.get('/createPerfil/',validarToken,newPersona)
// ruta pra obtener datos de la persona
rutas.get('/obtDatos/',validarToken,obtPersona)
// ruta par actualizar datos de persona
rutas.post('/updPersona/:id', validarToken, updatePersona)
// ruta para eleminar todos los datos de la persona
rutas.delete('/delPersona/:id',validarToken, deletePersona)

export default rutas