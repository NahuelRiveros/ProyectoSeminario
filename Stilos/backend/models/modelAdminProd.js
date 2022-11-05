import db from "../database/db.js";
import { DataTypes } from 'sequelize';

export const tbProd = db.define('producto', {existencia_producto: DataTypes.INTEGER, imagen_producto: DataTypes.STRING, precio_unitario: DataTypes.FLOAT, fk_talle: DataTypes.INTEGER, fk_color: DataTypes.INTEGER,fk_genero: DataTypes.INTEGER, fk_marca: DataTypes.INTEGER,fk_tipo: DataTypes.INTEGER }, {freezeTableName: true})