import jwt from "jsonwebtoken"
import User from "../model/user.model.js"
import redisClient from "../config/redis.js"

export const protect=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(' ')[1]
        if(!token)
             return res.status(401).json({msg:"No token provided"})
       const isBlacklisted= await redisClient.get(`blacklist: ${token}`)
       if(isBlacklisted){
        return res.status(401).json({msg:"Token is invalid (logged out)"})
       }
        const decoded=jwt.verify(token,process.env.JWT_KEY)
        let cachedUser= await redisClient.get(`user:${decoded.id}`)
        let user ;
        if(cachedUser){
            user=JSON.parse(cachedUser)
        }
        else{
            user=await User.findByPk(decoded.id)
            if(!user) return res.status(401).json({msg:"Unauthorized"})
            await redisClient.SETEX(`user:${decoded.id}`,3600,JSON.stringify(user))
            }
    
        req.user=user
      next()
        
    } catch (error) {
        console.error("Error in auth.js protect middleware")
    }
}
export default protect