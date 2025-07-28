import express from "express"
import { signup,login,logout } from "../controllers/auth.controller.js"
const router=express.Router()

router.get('/health-check',()=>{
    return "Server working"
})
router.post('/signup',signup)
router.post('/login',login)
router.delete('/logout',logout)

export default router