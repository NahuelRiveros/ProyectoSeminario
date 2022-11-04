// La esencia de sequelize es hacer una represetacion de las tablas en la base de datos
// Nombres en singular y Mayuscular la primer 
// Tablar plural y minuscula

// importamos base de datos
import db from '../database/db.js';
// importamos sequelize
// Aca nosotros unportamos el datatype para decir de que tipo de dato es nuestras variables de la base da datos
import { DataTypes } from 'sequelize';


// bassicamente construimos la estrucutra de nuestras tablas y lo que vamos a manejar
export const tbUser = db.define('usuarios', { email: DataTypes.STRING,contrasena: DataTypes.STRING});

 





