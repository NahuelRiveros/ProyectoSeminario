import {tbUserRol} from "../models/modelRegistroUsuario.js";
import {tbDomicilio} from "../models/modelPersona.js";
import { tbUserAdmin } from "../models/modelSuperAdmin.js";

export const changeRol = async (req, res) => {
    try{
        const user = await tbUserRol.update(req.body, {where:{id : req.params.id}})
        console.log(req.params.id)
        res.json("Cambiado correctamente")
        } catch (error) {
            res.json({ msg: error.message });
        }
}

export const AllDomPersona = async (req,res) => {
    try {
        const Domicilio = await tbDomicilio.findAll({where:{fk_persona:req.params.id}, paranoid: false})
        res.json(Domicilio)
    } catch (error) {
        res.json({msg: error.message})
    }
}
export const viewUsuarioAdmin = async (req, res) => {
 
    try {
        const allPerson = await tbUserAdmin.findAll();
        res.json(allPerson)
  
      } catch (error) {
        res.json({ msg: error.message });
      }
  }