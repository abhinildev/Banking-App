import express from "express"
import verifyToken from "../middleware/verifyToken.js"

import {addTransaction , getTransaction,getCategorySummary} from "../controllers/transaction.controller.js"

const router=express.Router()

router.post('/add',verifyToken,addTransaction)
router.get('/user',verifyToken,getTransaction)
router.get('/category-summary',verifyToken,getCategorySummary)

export default router