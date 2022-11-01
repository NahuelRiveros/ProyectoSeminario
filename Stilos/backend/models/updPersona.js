import db from "../database/db.js";
import { DataTypes } from "sequelize";


export const actualizarPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, localidad : DataTypes.INTEGER , provincia: DataTypes.INTEGER,genero:DataTypes.INTEGER, telefono: DataTypes.STRING });