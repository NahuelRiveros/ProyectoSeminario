import db from "../database/db.js";
import { DataTypes } from 'sequelize';

export const tbProductoShop = db.define('producto', {existencia_producto: DataTypes.INTEGER, imagen_producto: DataTypes.STRING, precio_unitario: DataTypes.FLOAT, fk_talle: DataTypes.INTEGER, fk_color: DataTypes.INTEGER,fk_genero: DataTypes.INTEGER, fk_marca: DataTypes.INTEGER,fk_tipo: DataTypes.INTEGER }, {freezeTableName: true})

export const tbTipoProducto = db.define('tipo_producto' ,{tipo_producto: DataTypes.STRING},{freezeTableName: true})

export const tbTalleProducto = db.define('talle_producto' ,{talle: DataTypes.STRING},{freezeTableName: true})

export const tbMarcaProducto = db.define('marca_producto' ,{marca: DataTypes.STRING},{freezeTableName: true})

export const tbColorProducto = db.define('color_producto' ,{color: DataTypes.STRING},{freezeTableName: true})