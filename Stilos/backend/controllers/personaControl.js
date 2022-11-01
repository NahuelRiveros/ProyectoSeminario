import {tbUser} from "../models/regModel.js";
import { personaPerfil } from "../models/personaModel.js";
import { actualizarPerfil } from "../models/updPersona.js";

//** Metodos para el CRUD **/
// Insert datos persona
export const newPersona = async (req, res) => {
    const {id} = req.user
    const {nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono } = req.body
    const ExisteUser = await tbUser.findOne({where :{ id : id}})
    const ExistePerfil = await personaPerfil.findOne({where:{fk_usuario: id}})
    if (ExisteUser && !ExistePerfil){

       const Insert = personaPerfil.create({nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono , fk_usuario:id})  
        return res.send("Guardado Correctamente!") // const inserDataPers = await personaPerfil.create()
    }
    else{

        return res.send("ya existe Usuario con un perfil creado")
    }
    // res.json({msg:'holamundoa', msg2: req.user})
}
// obtener datos de la persona y mostrarla en el front
export const obtPersona = async (req , res) => {
    const {id} = req.user
    const datosPerona = await personaPerfil.findOne({where : {fk_usuario : id}}) 
     return res.json(datosPerona)
    
}
// actualizar datos persona perfil
export const updatePersona = async (req, res) =>{
    const {id} = req.user
    const {nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono }=req.body
    const ExistePerfil = await personaPerfil.findOne({where:{fk_usuario: id}})
    if (ExistePerfil){
    try {
        
        const datosPersona = await actualizarPerfil.update(nombre_uno , nombre_dos , apellido , localidad , provincia ,genero , telefono ,{where :{ id : id}})
        return res.send("Datos Actualizados Correctamente")
    
        
    } catch (error) {
        return res.json({error:error})
    }}
    

}

