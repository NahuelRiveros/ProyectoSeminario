import Jwt  from "jsonwebtoken";
export const validarToken = (req, res ,next) =>{
    const accessToken = req.header("authorization")
    if (!accessToken){
        return res.json({error:"User not Logged In!"})
    }
    
    try {
        const validToken = Jwt.verify(accessToken, "accessToken")
        req.user = validToken
        if (validarToken) {
            next()
            
        }
    } catch (error) {
        res.json({error:error});
        }
};