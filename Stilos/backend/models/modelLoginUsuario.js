import db from "../database/db";
import { DataTypes } from 'sequelize';

// basicamente construimos la estrucutra de nuestras tablas y lo que vamos a manejar
export const tbUserLog = db.define('usuarios', { email: DataTypes.STRING,contrasena: DataTypes.STRING});

