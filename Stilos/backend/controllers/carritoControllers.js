import { tbCarrito, tbCarrDetalle } from "../models/modelCarrito.js";
import { tbProd } from "../models/modelAdminProd.js";

export const CarrAllProd = async (req, res) => {
    try {
        const Carrito = await tbCarrito.findOne({ where: { fk_usuario : req.params.id } });
        const CarrDetalle = await tbCarrDetalle.findAll({where: {fk_id_carrito : Carrito.id}})
        res.json(CarrDetalle)
      } catch (error) {
        res.json({ msg: error.message });
      }
}

export const CarrAddProd = async (req, res) => {
    const prodQuery = await tbProd.findOne({where: {id : req.body.idProd}})
    const Prod = JSON.parse(JSON.stringify(prodQuery))
    const CarrQuery = await tbCarrito.findOne ({where : { fk_usuario : req.params.id }})
    const Carrito = JSON.parse(JSON.stringify(CarrQuery))
    console.log(JSON.stringify(Carrito)+"   "+JSON.stringify(Prod)+"   "+"Aqui llegue 1")
    if (!CarrQuery) {
        try {
            const CrearCarro = await tbCarrito.create({ fk_usuario : req.params.id })
            const CarroQuery = await tbCarrito.findOne({where : { fk_usuario : req.params.id}})
            const Carro = JSON.parse(JSON.stringify(CarroQuery))
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carro.id, fk_producto_id: Prod.id, cantidad: req.body.cantidad, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})
            res.json({msg: "Guardado con exito"})
        } catch (error) {
            res.json({msg: error.message + "1"})
        }
    } else {
        try {
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carrito.id, fk_producto_id: Prod.id, cantidad: req.body.cantidad, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})
            res.json({msg: "Guardado con exito"})
        } catch (error) {
            res.json({msg: error.message + "2"})
        }
    }
}