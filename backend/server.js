import express from "express"
import dotenv from "dotenv"
import sequelize from "./config/neon.js"
import { json } from "sequelize"
import cors from "cors"
import authRoute from "./routes/auth.routes.js"
import transactionRoutes from "./routes/transaction.route.js"
import budgetRoute from "./routes/budgets.rote.js"
import redisClient from "./config/redis.js"
dotenv.config()
const app=express()

await redisClient.connect();
app.use(cors({
    origin:"https://banking-ksb8nukrx-abhinildevs-projects.vercel.app",
    credentials:true
}))
app.use(express.json())

app.use('/auth',authRoute)
app.use('/transaction',transactionRoutes)
app.use('/budget',budgetRoute)
sequelize.sync({alter:true}).then(()=>console.log("Neon is connected"))

app.listen(process.env.port,()=>{
    console.log("Server running on port: "+ process.env.port)
})