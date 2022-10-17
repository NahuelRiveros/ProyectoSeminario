// importo la conexion a la base de datos
// Utilizamos cors que es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador. 
// Express siver para escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
import cors from 'cors'
import express  from 'express';
import  db  from './database/db.js';
// aca importe las rutas creada pero cambidole el nombre a las variable aqui
import regisRutas from './routes/routes.js';

// uso de expressy cors
const app = express();
app.use(cors());
app.use(express.json());

//esto devuelve el los datos que tenemos cargado en la base de datos
app.use('/registro' , regisRutas)

//pruebas de a base de datos si se logra hacer la conexion
try { 
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }




// app.get('/',(req , res)=>{

//     res.send('Hola mundo VAMOOO')
// })
// decimos en que ruta vamosa ejecuta rnuestro servidor
app.listen(8000,()=>{
    console.log('server esta corriendo en  http://localhost:8000/')
})