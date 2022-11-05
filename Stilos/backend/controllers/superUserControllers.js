import {tbUserRol} from "../models/modelRegistroUsuario.js";


export const changeRol = async (req, res) => {
    try{
        const user = await tbUserRol.update(req.body, {where:{id : req.params.id}})
        console.log(req.params.id)
        res.json("Cambiado correctamente")
        } catch (error) {
            res.json({ msg: error.message });
        }
}