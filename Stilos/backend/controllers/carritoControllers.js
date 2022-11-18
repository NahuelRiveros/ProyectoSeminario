import { tbCarrito, tbCarrDetalle, tbOrdenCompra } from "../models/modelCarrito.js";
import { tbColores, tbGeneroProd, tbMarcas, tbProd, tbTalles, tbTipoProd } from "../models/modelAdmins.js";

//CRUD de carrito sin las acciones al comprar

export const CarrAllProd = async (req, res) => {
    const allProd = await tbProd.findAll({ raw: true });
    const allMarcas = await tbMarcas.findAll({ raw: true })
    const allTalles = await tbTalles.findAll({ raw: true })
    const allColores = await tbColores.findAll({ raw: true })
    const allTipos = await tbTipoProd.findAll({ raw: true })
    const allGeneros = await tbGeneroProd.findAll({ raw: true })
    

    try {
        const Carrito = await tbCarrito.findOne({ where: { fk_usuario : req.params.id } });     //Buscamos el carrito del usuario en cuestion
        const CarrDetalle = await tbCarrDetalle.findAll({where: {fk_id_carrito : Carrito.id, estado_compra: "En carro"}, raw:true })      //Traemos los detalles del carrito usando el id del carrito hallado en la constante anterior
        function setProductoJson(listProd = []) {
            for (let i = 0; i < CarrDetalle.length; i++) {
              listProd[i] = {}
              listProd[i].id = CarrDetalle[i].id
              listProd[i].precio = CarrDetalle[i].precio_unitario
                for (let ii = 0; ii < allProd.length; ii++) {
                    
                    if (CarrDetalle[i].fk_producto_id == allProd[ii].id) {
                        listProd[i].img = allProd[ii].imagen_producto
                    for (let a = 0; a < allMarcas.length; a++) {
                      if (allProd[ii].fk_marca == allMarcas[a].id) {
                        listProd[i].marca = allMarcas[a].marca
                      }
                    } 
                    for (let b = 0; b < allTalles.length; b++) {
                      if (allProd[ii].fk_talle == allTalles[b].id) {
                        listProd[i].talle = allTalles[b].talle
                      }
                    }
                    for (let c = 0; c < allColores.length; c++) {
                      if (allProd[ii].fk_color == allColores[c].id) {
                        listProd[i].color = allColores[c].color
                      }
                    }
                    for (let d = 0; d < allTipos.length; d++) {
                      if (allProd[ii].fk_tipo == allTipos[d].id) {
                        listProd[i].tipo = allTipos[d].tipo_producto
                      }
                    }
                    for (let e = 0; e < allGeneros.length; e++) {
                      if (allProd[ii].fk_genero == allGeneros[e].id) {
                        listProd[i].genero = allGeneros[e].genero
                      }
                    }
                  }
                  
                }
            }
            return listProd
          }
          const Productos = setProductoJson();
          res.json(Productos);
      } catch (error) {
        res.json({ msg: error.message, json: null });
      }
}

export const CarrAddProd = async (req, res) => {
    const Prod = await tbProd.findOne({where: {id : req.body.idProd}})  //Se obtiene el producto gracias a un id enviado por body
    const Carrito = await tbCarrito.findOne ({where : { fk_usuario : req.params.id }}) //Se busca si el carrito existe para el usuario en cuestion, para asi cargarle los detalles. El id del usuario es enviado por parametros
    if (!Carrito) {     //Si el carrito no existe
        try {
            const CrearCarro = await tbCarrito.create({ fk_usuario : req.params.id })       //Creara un carrito relacionado a ese usuario usando el id enviado por parametro
            const Carro = await tbCarrito.findOne({where : { fk_usuario : req.params.id}})  //Buscamos ese carro creado para usar el ID del carro
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carro.id, fk_producto_id: Prod.id, cantidad: 1, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})       //Guardamos los datos en los detalles del carrito para usarlos y mostrarlos en pantalla de ser necesarios
            res.json({msg: "Guardado con exito"})
        } catch (error) {
            res.json({msg: error.message + "   error 1"})
        }
    } else {        //Pero si el carrito existe
        try {
            //Solo guardara los datos, ya que el carrito existe, los pasos de mas no son necesarios
            const crearDetail = await tbCarrDetalle.create({fk_id_carrito: Carrito.id, fk_producto_id: Prod.id, cantidad:1, estado_compra: "En carro", fecha_compra: null, precio_unitario: Prod.precio_unitario})
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
    const Carrito = await tbCarrito.findOne ({where : { fk_usuario : req.params.id }}) 
    var fecha = new Date()
    const fechaFormat = (fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getUTCFullYear())
    const {metodoPago} = req.body
    try {
        const CarrDetail = await tbCarrDetalle.findAll({where: {fk_id_carrito : Carrito.id, estado_compra: "En carro"}})
        const AccComprar = await tbCarrDetalle.update({estado_compra: "Completado", fecha_compra: fecha},{where: {fk_id_carrito : Carrito.id, estado_compra: "En carro"}})
        let totalPrecio = CarrDetail.reduce((sum,value) => (typeof value.precio_unitario == "number" ? sum + value.precio_unitario : sum),0)  
        let totalCantidad = Object.keys(CarrDetail).length
        const NuevaOrden = tbOrdenCompra.create({fk_id_carrito: Carrito.id, cantidad_producto: totalCantidad, metodo_pago: metodoPago, total_pagado: totalPrecio})
        res.json({msg:"finalizado"})
    } catch (error){
        res.json({msg: error.message})
    }

}

//Historial de compras

export const HistoryCompras = async (req, res) => {
    try {
        const Carrito = await tbCarrito.findOne({ where: { fk_usuario : req.params.id } });     //Buscamos el carrito del usuario en cuestion
        const CarrOrden = await tbOrdenCompra.findAll({where:{fk_id_carrito: Carrito.id}})

        res.json(CarrOrden)
      } catch (error) {
        res.json({ msg: error.message });
      }
}

export const HistCompDetails = async (req, res) => {
    try {
        const Carrito = await tbCarrito.findOne({ where: { fk_usuario : req.params.id } });     //Buscamos el carrito del usuario en cuestion
        const CarrDetalle = await tbCarrDetalle.findAll({where: {fk_id_carrito : Carrito.id, estado_compra: "Completado"}})      //Traemos los detalles del carrito usando el id del carrito hallado en la constante anterior
        res.json(CarrDetalle)
      } catch (error) {
        res.json({ msg: error.message });
      }
}