// importo la conexion a la base de datos
// Utilizamos cors que es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador. 
// Express siver para escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
import cors from 'cors'
import express  from 'express';
import  db  from './database/db.js';
// aca importe las rutas creada pero cambidole el nombre a las variable aqui

// rutas de las conexiones a la base de datos para hacer peticiones
import rutaUsers from './routes/rutaUsuario.js';
import rutaPerfil from './routes/rutaPersona.js';
import rutasSU from './routes/rutaSU.js';
import rutaAdmins from './routes/rutaAdmins.js';
import rutaCarrito from './routes/rutaCarrito.js';
import rutaShop from './routes/rutaProductoShop.js';



import session from 'express-session';
import Sequelize from './database/db.js';

// uso de express y cors
const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({extended:false}))
// dotenv.config({paht:'./env/.env'})


//esto devuelve los datos que tenemos cargado en la base de datos en esa ruta.
// Aqui van todas las rutas donde voy a trabarjar con cada tabla del a BD.
app.use('/registro' , rutaUsers);
app.use('/persona' , rutaPerfil);
app.use('/superUser', rutasSU)
app.use('/admins', rutaAdmins)
app.use('/carrito', rutaCarrito)
app.use('/productoShop/', rutaShop)




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