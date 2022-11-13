import { tbCarrito, tbCarrDetalle } from "../models/modelCarrito.js";
import { tbProd } from "../models/modelAdminProd.js";

export const CarrAllProd = async (req, res) => {
    try {
        const CarritoID = await tbCarrito.findAll({ where: { fk_usuario : req.params.id } });
        const CarrDetalle = await tbCarrDetalle.findAll({where: {fk_id_carrito : CarritoID.id}})
      } catch (error) {
        res.json({ msg: error.message });
      }
}

export const CarrAddProd = async (req, res) => {
    try {
        const CarritoID = await res.json(tbCarrito.findAll ({where : { fk_usuario : req.params.id}}))
        const CarrDetalle = await res.json(tbCarrDetalle.findAll({where: {fk_id_carrito : CarritoID.id}}))
        const prod = await res.json(tbProd.findAll({where: {id : req.body.idProd}}))
    } catch (error) {
        res.json({msg: error.message})
    }
}