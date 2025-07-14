import express from "express"
import { getBudgetLimit, getBudgetSummary,setBudgetLimit } from "../controllers/budget.controller.js"
import verifyToken from "../middleware/verifyToken.js"

const router=express.Router()

router.get('/summary',verifyToken,getBudgetSummary)
router.post('/set-budget',verifyToken,setBudgetLimit)
router.get('/',verifyToken,getBudgetLimit)

export default router