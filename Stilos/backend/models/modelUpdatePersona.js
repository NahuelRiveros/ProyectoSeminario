import db from "../database/db.js";
import { DataTypes } from "sequelize";


export const actualizarPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, fk_localidad : DataTypes.INTEGER , fk_provincia: DataTypes.INTEGER,fk_genero:DataTypes.INTEGER, telefono: DataTypes.STRING });