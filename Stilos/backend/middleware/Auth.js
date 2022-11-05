import Jwt  from "jsonwebtoken";

//TOKEN DE ACCESO PARA LOS QUE SE LOGEAN

export const validarToken = (req, res ,next) =>{
    const accessToken = req.header("authorization")
    if (!accessToken){
        req.header("authorization")
        return res.json({error:"User not Logged In!"})
    }
    
    try {
        const validToken = Jwt.verify(accessToken, "accessToken")
        req.user = validToken
        if (validarToken) {
            next()
            
        }
    } catch (error) {
        //console.log("error 2 de auth")
        res.json({error:error});
        }
};