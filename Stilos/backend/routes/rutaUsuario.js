import express from 'express';
import {validarToken} from '../middleware/Auth.js'
import { allUsers,authLog,delUser,newUser,oneUser,udpUser } from '../controllers/tablaUsuario.js';
// para hacer esta parte debemos tener en cuenta los verbos HTTP para las apis 
// creamos las rutas
const rutas = express.Router()
//get metodo para obtener
rutas.get('/user/',allUsers)
rutas.post('/unUser/', oneUser)
//post metedo para crear
rutas.post('/user/',newUser)
// put metodo para actualizar
rutas.put('/user/:id', udpUser)
// delete metodo para eliminar registro
rutas.delete('/user/:id', delUser)
// auth login
rutas.get('/auth',validarToken,authLog )


export default rutas



