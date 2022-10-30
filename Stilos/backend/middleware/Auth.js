import Jwt  from "jsonwebtoken";
const validarToken = (req, res ,next) =>{
    const accessToken = req.header("accessToken")
    if (!accessToken){
        return res.json({error:"User not Logged In!"})
    }
    try {
        const validarToken = Jwt.verify(accessToken, 'HOLAMUNDO')
        if (validarToken) {
            return next()
            
        }
    } catch (error) {
        
    }
};