import express from 'express'; 
import {deletePersona, newPersona, obtPersona,DomPersona} from '../controllers/tablaPersona.js';
import {validarToken} from '../middleware/Auth.js';

const rutas = express.Router();
//ruta para guardar datos de la persona y actualizar
rutas.post('/createPerfil/',validarToken,newPersona)
// ruta pra obtener datos de la persona
rutas.get('/obtDatos/',validarToken,obtPersona)
// ruta para eleminar todos los datos de la persona
rutas.delete('/delPersona/:id',validarToken, deletePersona)

rutas.get('/domicilio/:id',validarToken, DomPersona)

export default rutas