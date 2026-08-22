const jwt = require('jsonwebtoken');
const authMiddleWare = async (req, res, next) => {
try{
    const token=req.headers.authorization?.split(" ")[1];

    console.log("token",token)
    if(!token){
        return res.status(401).json({
            message :"token not found"
        })
    }
    const decoded =jwt.verify(token,process.env.JWT_SECRET);
    req.user =decoded;
    next()
}
    catch (err) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

}

const adminMiddleware=(req,res,next)=>{
if(req.user.role!=="supereadmin"){
    return res.status(403).json({
        message:"only admin has access to delete"
    })

}

next()

}
module.exports= { authMiddleWare ,adminMiddleware}