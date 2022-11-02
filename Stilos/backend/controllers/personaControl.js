import {tbUser} from "../models/regModel.js";
import { personaPerfil } from "../models/personaModel.js";
import { actualizarPerfil } from "../models/updPersona.js";

//** Metodos para el CRUD **/
// Insert datos persona y actualizacion


export const newPersona = async (req, res) => {
    const {id} = req.user
    console.log("aqui")
    console.log(req.body)
    const {nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono } = req.body
    const ExisteUser = await tbUser.findOne({where :{ id : id}})
    //console.log(ExisteUser)
    const ExistePerfil = await personaPerfil.findOne({where:{fk_usuario: id}})
    //console.log(ExistePerfil)
    if (ExisteUser && !ExistePerfil){

        console.log("creando")
        const Insert = personaPerfil.create({nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono, fk_usuario: id})  
        return res.send("Guardado Correctamente!") // const inserDataPers = await personaPerfil.create()
    }
    else if (ExisteUser && ExistePerfil){

        console.log("existe")
        try {
            const datosPersona = await actualizarPerfil.update({nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono, fk_usuario: id}, {where: {fk_usuario: id}})
            return res.json({msg:"Datos Actualizados Correctamente"})
        
            
        } catch (error) {
            return res.json({error:error})
        }
        //return res.send("ya existe Usuario con un perfil creado")
    }
    // res.json({msg:'holamundoa', msg2: req.user})
}



// obtener datos de la persona y mostrarla en el front
export const obtPersona = async (req , res) => {
    const {id} = req.user
    const datosPersona = await personaPerfil.findOne({where : {fk_usuario : id}}) 
     return res.json(datosPersona)
    
}
// actualizar datos persona perfil

// Eliminar usuario

export const deletePersona = async (req, res) =>{
    const ExistePerfil = await personaPerfil.findOne({where:{id:  req.params.id}})
    if (ExistePerfil){
        try {
            const deleted = await personaPerfil.destroy({where:{id:  req.params.id}})
            res.json({msg: 'datos de persona eliminada =('})
        } catch (error) {
            res.josn({msg: error})
        }
    }
    else {
        return res.json({msg: "usuario no encontrado"})
    }
}
