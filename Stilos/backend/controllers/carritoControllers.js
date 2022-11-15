import { tbCarrito, tbCarrDetalle } from "../models/modelCarrito.js";
import { tbProd } from "../models/modelAdminProd.js";

//CRUD de carrito sin las acciones al comprar

export const CarrAllProd = async (req, res) => {
    try {
        const Carrito = await tbCarrito.findOne({ where: { fk_usuario : req.params.id } });     //Buscamos el carrito del usuario en cuestion
        const CarrDetalle = await tbCarrDetalle.findAll({where: {fk_id_carrito : Carrito.id}})      //Traemos los detalles del carrito usando el id del carrito hallado en la constante anterior
        res.json(CarrDetalle)
      } catch (error) {
        res.json({ msg: error.message });
      }
}

export const CarrAddProd = async (req, res) => {
    const Prod = await tbProd.findOne({where: {id : req.body.idProd}})  //Se obtiene el producto gracias a un id enviado por body
    const Carrito = await tbCarrito.findOne ({where : { fk_usuario : req.params.id }}) //Se busca si el carrito existe para el usuario en cuestion, para asi cargarle los detalles. El id del usuario es enviado por parametros
    if (!Carrito) {     //Si el carrito no existe
        try {
            const CrearCarro = await tbCarrito.create({ fk_usuario : req.params.id })       //Creara un carrito relacionado a ese usuario usando el id enviado por parametro
            const Carro = await tbCarrito.findOne({where : { fk_usuario : req.params.id}})  //Buscamos ese carro creado para usar el ID del carro
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carro.id, fk_producto_id: Prod.id, cantidad: req.body.cantidad, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})       //Guardamos los datos en los detalles del carrito para usarlos y mostrarlos en pantalla de ser necesarios
            res.json({msg: "Guardado con exito"})
        } catch (error) {
            res.json({msg: error.message + "   error 1"})
        }
    } else {        //Pero si el carrito existe
        try {
            //Solo guardara los datos, ya que el carrito existe, los pasos de mas no son necesarios
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carrito.id, fk_producto_id: Prod.id, cantidad: req.body.cantidad, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})
            res.json({msg: "Guardado con exito"})
        } catch (error) {
            res.json({msg: error.message + "   error 2"})
        }
    }
}

export const CarrDelProd = async (req,res) => {
    try{
    const CarrProd = await tbCarrDetalle.destroy({where: {id : req.params.id}})
    res.json({msg: "Eliminado con exito"})
    } catch (error) {
        res.json({msg: error.message +"   error de borrado"})
    }
}

//Backend al realizar la compra

export const AccComprar = async (req,res) => {

}