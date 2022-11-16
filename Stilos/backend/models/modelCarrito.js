import db from "../database/db.js";
import { DataTypes } from 'sequelize';

export const tbCarrito = db.define('carrito', {fk_usuario: DataTypes.INTEGER}, {freezeTableName: true})
export const tbCarrDetalle = db.define('carrito_Detalle', {fk_id_carrito: DataTypes.INTEGER, fk_producto_id:  DataTypes.INTEGER, cantidad:  DataTypes.INTEGER, estado_compra:  DataTypes.STRING, fecha_compra:  DataTypes.DATE, precio_unitario:  DataTypes.INTEGER}, {freezeTableName: true})
export const tbOrdenCompra = db.define('orden_de_compra', {fk_id_carrito: DataTypes.INTEGER, cantidad_producto: DataTypes.INTEGER, metodo_pago: DataTypes.STRING, total_pagado: DataTypes.FLOAT},{freezeTableName: true})