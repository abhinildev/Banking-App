import express from "express"
import dotenv from "dotenv"
import sequelize from "./config/neon.js"
import { json } from "sequelize"
import cors from "cors"
import authRoute from "../backend/routes/auth.routes.js"
import transactionRoutes from "../backend/routes/transaction.route.js"
dotenv.config()
const app=express()


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/transaction',transactionRoutes)
sequelize.sync({alter:true}).then(()=>console.log("Neon is connected"))

app.listen(process.env.port,()=>{
    console.log("Server running on port: "+ process.env.port)
})