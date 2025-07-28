import {createClient} from "redis"

const redisClient= createClient({
    socket:{
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
    },
})
redisClient.on("connect",()=>{
    console.log("Redis connected")
})
redisClient.on("error",(err)=>{
    console.log("Redis error: ",err)
})
export default redisClient;