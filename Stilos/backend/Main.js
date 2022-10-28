// importo la conexion a la base de datos
// Utilizamos cors que es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador. 
// Express siver para escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
import dotenv from 'dotenv'
import cors from 'cors'
import express  from 'express';
import  db  from './database/db.js';
import jwt from 'jsonwebtoken';
const { sign, decode, verify } = jwt;
// aca importe las rutas creada pero cambidole el nombre a las variable aqui
import regisRutas from './routes/routes.js';
import { DataRowMessage } from 'pg-protocol/dist/messages.js';
import session from 'express-session';
import bcryptjs from 'bcryptjs'

// uso de express y cors
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());
dotenv.config({paht:'./env/.env'})



//esto devuelve los datos que tenemos cargado en la base de datos en esa ruta
app.use('/registro' , regisRutas);

app.post('/registro/login', async (req , res)=>{
  // app.use(session({secret: clave , resave: true, saveUninitialized:true}))
  const user = req.body.email
  const clave = req.body.contrasena
  let claveHash = await bcryptjs.hash(clave,8)
  if (claveHash == '1234567'){
    res.status(400).send('encripto mal')}
  else {
    res.status(400).send('Funciona')
  }
  } )

  






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
app.listen(8000,(req,res)=>{
    console.log('server esta corriendo en  http://localhost:8000/')
})