import db from "../database/db.js";
import { DataTypes } from "sequelize";


export const personaPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, localidad : DataTypes.INTEGER , provincia: DataTypes.INTEGER,genero:DataTypes.INTEGER, telefono: DataTypes.STRING , fk_usuario : DataTypes.INTEGER}, {paranoid:true});