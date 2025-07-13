import jwt from "jsonwebtoken"
import User from "../model/user.model.js"

export const protect=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(' ')[1]
        const decoded=jwt.verify(token,process.env.JWT_KEY)
        const user=await User.findByPk(decoded.id)
        if(!user) return res.status(401).json({msg:'Unauthorized'})
        req.user=user
      next()
        
    } catch (error) {
        console.error("Error in auth.js")
    }
}
export default protect