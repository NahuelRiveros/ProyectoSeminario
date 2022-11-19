import express from 'express'; 
import { allProd, oneProd, delProd, newProd, updProd, contGenPersona, getVentasM, uploader } from '../controllers/adminControllers.js';


const rutas = express.Router()
//get metodo para obtener
rutas.get('/prod/', allProd)
rutas.get('/unProd/:id', oneProd)
//post metedo para crear
rutas.post('/prodAdd/', uploader.single('file') ,newProd)
// put metodo para actualizar
rutas.put('/prod/:id', updProd)
// delete metodo para eliminar registro
rutas.delete('/prod/:id', delProd)
// auth login
//rutas.get('/auth',validarToken,authLog )


//Rutas para informe de personas
rutas.get('/personas/', contGenPersona)

//rutas para informe de ventas
rutas.get('/ventasM/', getVentasM)

//Rutas para Mostrar usuario en pantalla del SuperAdmin


export default rutas