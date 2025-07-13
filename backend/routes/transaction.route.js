import express from "express"
import verifyToken from "../middleware/verifyToken.js"

import {addTransaction , getTransaction} from "../controllers/transaction.controller.js"

const router=express.Router()

router.post('/add',verifyToken,addTransaction)
router.get('/user',verifyToken,getTransaction)

export default router