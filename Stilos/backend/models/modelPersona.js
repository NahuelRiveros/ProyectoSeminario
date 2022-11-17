import db from "../database/db.js";
import { DataTypes } from "sequelize";


export const tbPersonaPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, fk_localidad : DataTypes.INTEGER , fk_provincia: DataTypes.INTEGER,fk_genero:DataTypes.INTEGER, telefono: DataTypes.STRING , fk_usuario : DataTypes.INTEGER}, {paranoid:true}); 
export const tbActualizarPerfil = db.define('personas', {nombre_uno: DataTypes.STRING , nombre_dos : DataTypes.STRING , apellido : DataTypes.STRING, fk_localidad : DataTypes.INTEGER , fk_provincia: DataTypes.INTEGER,fk_genero:DataTypes.INTEGER, telefono: DataTypes.STRING });

export const tbDomicilio = db.define('domicilio', {domicilio: DataTypes.STRING, fk_persona: DataTypes.INTEGER, calle: DataTypes.STRING, departamento: DataTypes.STRING, piso: DataTypes.STRING, num_Casa: DataTypes.STRING, barrio: DataTypes.STRING},{paranoid:true,freezeTableName: true});