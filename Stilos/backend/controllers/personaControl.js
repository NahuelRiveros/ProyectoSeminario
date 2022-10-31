import {tbUser} from "../models/regModel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import{validarToken} from '../middleware/Auth.js'
//** Metodos para el CRUD **/


export const newPersona = async (req, res) => {
    res.json({msg:'holamundo', msg2: req.user})

}