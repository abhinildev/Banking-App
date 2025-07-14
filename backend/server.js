import express from "express"
import dotenv from "dotenv"
import sequelize from "./config/neon.js"
import { json } from "sequelize"
import cors from "cors"
import authRoute from "../backend/routes/auth.routes.js"
import transactionRoutes from "../backend/routes/transaction.route.js"
import budgetRoute from "../backend/routes/budgets.rote.js"
dotenv.config()
const app=express()


app.use(cors({
    origin:"https://banking-app-fz8i.vercel.app/",
    credentials:true
}))
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/transaction',transactionRoutes)
app.use('/api/budget',budgetRoute)
sequelize.sync({alter:true}).then(()=>console.log("Neon is connected"))

app.listen(process.env.port,()=>{
    console.log("Server running on port: "+ process.env.port)
})