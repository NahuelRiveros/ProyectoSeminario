import db from "../database/db.js";
import { DataTypes } from "sequelize";


export const personaPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, fk_localidad : DataTypes.INTEGER , fk_provincia: DataTypes.INTEGER,fk_genero:DataTypes.INTEGER, telefono: DataTypes.STRING , fk_usuario : DataTypes.INTEGER}, {paranoid:true}); 