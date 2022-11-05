import express from 'express'; 
import {validarToken} from '../middleware/Auth.js';
import { changeRol } from '../controllers/superUserControllers.js';


const rutas = express.Router()
//get metodo para obtener
//rutas.get('/user/',allUsers)
//rutas.post('/unUser/', oneUser)
//post metedo para crear
//rutas.post('/user/',newUser)
// put metodo para actualizar
rutas.put('/roles/:id', changeRol)
// delete metodo para eliminar registro
//rutas.delete('/user/:id', delUser)
// auth login
//rutas.get('/auth',validarToken,authLog )

export default rutas

