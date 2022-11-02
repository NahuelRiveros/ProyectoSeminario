import Jwt  from "jsonwebtoken";
export const validarToken = (req, res ,next) =>{
    const accessToken = req.header("authorization")
    if (!accessToken){
        //console.log(req.header("authorization"))
        console.log("error de auth")
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