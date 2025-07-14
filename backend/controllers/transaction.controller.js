import jwt from "jsonwebtoken"
import Transaction from "../model/transaction.model.js"
import { Op } from "sequelize";
export const addTransaction = async (req, res) => {
  try {
    const { type, amount } = req.body;

    const transaction = await Transaction.create({
      type,
      amount,
      userId: req.user.id
    });

    console.log('--- DEBUG ---');
    console.log('JWT_KEY:', process.env.JWT_KEY);
    console.log('User ID:', req.user.id);
    console.log('----------');

    return res.status(201).json(transaction);  // ✅ Added return before res
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to add transaction" });
  }
}

export const getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
      limit: 5
    });

    console.log('--- DEBUG ---');
    console.log('JWT_KEY:', process.env.JWT_KEY);
    console.log('User ID:', req.user.id);
    console.log('----------');

    return res.json(transactions);  // ✅ Added return
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to fetch transactions" });
  }
}


export const getCategorySummary=async(req,res)=>{
try {
  const transactions=await Transaction.findAll({
    where:{
      userId:req.user.id,
      type:{[Op.in]:['debit','withdrawel','withdrawal']}
    }
  })
  const summary={}
  transactions.forEach((tx)=>{
    const cat=tx.category || 'Uncategorized'
    summary[cat]=(summary[cat]|| 0)+Number(tx.amount)
  })
  res.json(summary)
} catch (error) {
  console.error('Error in category summary:', error);
    res.status(500).json({ msg: 'Failed to fetch category summary' });
  
}
}