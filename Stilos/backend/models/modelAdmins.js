import db from "../database/db.js";
import { DataTypes } from 'sequelize';

//modelo para la tabla de productos
export const tbProd = db.define('producto', {existencia_producto: DataTypes.INTEGER, imagen_producto: DataTypes.STRING, precio_unitario: DataTypes.FLOAT, fk_talle: DataTypes.INTEGER, fk_color: DataTypes.INTEGER,fk_genero: DataTypes.INTEGER, fk_marca: DataTypes.INTEGER,fk_tipo: DataTypes.INTEGER }, {freezeTableName: true})

//modelo para la tabla de ordenes de compra

export const tbCompras = db.define('orden_de_compra', {fk_id_carrito: DataTypes.INTEGER, cantidad_producto: DataTypes.INTEGER, metodo_pago: DataTypes.STRING, total_pagado: DataTypes.FLOAT, createdAt: DataTypes.DATE}, {freezeTableName: true})

//para informes de stock
export const tbMarcas = db.define('marca_producto',{marca: DataTypes.STRING} , {freezeTableName: true})
export const tbTalles = db.define('talle_producto',{talle: DataTypes.STRING} , {freezeTableName: true})
export const tbColores = db.define('color_producto',{color: DataTypes.STRING} , {freezeTableName: true})
export const tbGeneroProd = db.define('genero_producto',{genero: DataTypes.STRING} , {freezeTableName: true})
export const tbTipoProd = db.define('tipo_producto',{tipo_producto: DataTypes.STRING} , {freezeTableName: true})