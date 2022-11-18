// importamos base de datos
import db from '../database/db.js';
// importamos sequelize
// Aca nosotros unportamos el datatype para decir de que tipo de dato es nuestras variables de la base da datos
import { DataTypes } from 'sequelize';

// Usado en controlls admin
export const tbUserAdmin = db.define('usuarios', { email: DataTypes.STRING , fk_permiso_usuario : DataTypes.INTEGER }, {freezeTableName: true});