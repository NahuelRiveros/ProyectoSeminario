import {tbUser} from "../models/modelRegistroUsuario.js";
import { tbPersonaPerfil, tbActualizarPerfil, tbDomicilio } from "../models/modelPersona.js";

//** Metodos para el CRUD **/



// Insert datos persona y actualizacion
export const newPersona = async (req, res) => {
    const {id} = req.user
    // console.log("aqui")
    // console.log(req.body.)
    const {nombre_uno , nombre_dos , apellido , fk_localidad , fk_provincia ,fk_genero , telefono, domicilio, calle, departamento, piso, num_Casa, barrio } = req.body
    const ExisteUser = await tbUser.findOne({where :{ id : id}})
    //console.log(ExisteUser)
    const ExistePerfil = await tbPersonaPerfil.findOne({where:{fk_usuario: id}})
    //console.log(ExistePerfil)
    if (ExisteUser && !ExistePerfil){

        console.log("creando")
        const InsertPers = await tbPersonaPerfil.create({nombre_uno , nombre_dos , apellido , fk_localidad , fk_provincia ,fk_genero , telefono, fk_usuario: id})
        const newPers = await tbPersonaPerfil.findOne({where:{fk_usuario : id}})
        const InsertDomi = await tbDomicilio.create({domicilio, fk_persona: newPers.id, calle, departamento, piso, num_Casa, barrio})
        return res.send("Guardado Correctamente!") // const inserDataPers = await tbPersonaPerfil.create()
    }
    else if (ExisteUser && ExistePerfil){

        console.log("existe")
        try {
            const datosPersona = await tbActualizarPerfil.update({nombre_uno , nombre_dos , apellido , fk_localidad , fk_provincia ,fk_genero , telefono, fk_usuario: id}, {where: {fk_usuario: id}})
            const preNewDom = await tbDomicilio.destroy({where:{fk_persona:ExistePerfil.id}})
            const newDom = await tbDomicilio.create({domicilio, fk_persona: ExistePerfil.id, calle, departamento, piso, num_Casa, barrio})
            return res.json({msg:"Datos Actualizados Correctamente"})
        
            
        } catch (error) {
            return res.json({error:error.message})
        }
        //return res.send("ya existe Usuario con un perfil creado")
    }
    // res.json({msg:'holamundoa', msg2: req.user})
}



// obtener datos de la persona y mostrarla en el front
export const obtPersona = async (req , res) => {
    const {id} = req.user
    const datosPersona = await tbPersonaPerfil.findOne({where : {fk_usuario : id}}) 
     return res.json(datosPersona)
    
}
// actualizar datos persona perfil

// Eliminar usuario

export const deletePersona = async (req, res) =>{
    const ExistePerfil = await tbPersonaPerfil.findOne({where:{id:  req.params.id}})
    if (ExistePerfil){
        try {
            const deleted = await tbPersonaPerfil.destroy({where:{id:  req.params.id}})
            res.json({msg: 'datos de persona eliminada =('})
        } catch (error) {
            res.josn({msg: error})
        }
    }
    else {
        return res.json({msg: "usuario no encontrado"})
    }
}

//Obtener domicilios

export const DomPersona = async (req,res) => {
    try {
        const Domicilio = await tbDomicilio.findOne({where:{fk_persona:req.params.id}})
        res.json(Domicilio)
    } catch (error) {
        res.json({msg: error.message})
    }
}
