import express from 'express';
import { auctRegistro, crearRegistro, elimRegistro, obtRegistros, obtUnRegistro } from '../controllers/BlogControllers.js';
// para hacer esta parte debemos tener en cuenta los verbos HTTP para las apis 
// creamos las rutas
const rutas = express.Router()
//get metodo para obtener
rutas.get('/', obtRegistros)
rutas.get('/:id', obtUnRegistro)
//post metedo para crear
rutas.post('/',crearRegistro)
// put metodo para actualizar
rutas.put('/:id', auctRegistro)
// delete metodo para eliminar registro
rutas.delete('/:id', elimRegistro)


export default rutas



