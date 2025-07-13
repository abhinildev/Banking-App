import jwt from "jsonwebtoken"
import  Transaction  from "../model/transaction.model.js"
export const addTransaction=async(req,res)=>{
try{
    const {type,amount}=req.body
    const transaction=await Transaction.create({
        type,
        amount,
        userId:req.user.id
    })
    res.status(201).json(transaction)
    console.log('--- DEBUG ---');
console.log('JWT_KEY:', process.env.JWT_KEY);
console.log('Token :' , token ? token.slice(0, 30) + '...' : 'none');
console.log('----------');

}
catch(err){
    res.status(500).json({msg:"Failed to add transaction"})
}
}
export const getTransaction=async(req,res)=>{
    try{ 
        const transactions=await Transaction.findAll({
            where:{userId:req.user.id},
            order:[['createdAt','DESC']],
            limit:5
        })
        res.json(transactions)
        console.log('--- DEBUG ---');
console.log('JWT_KEYc:', process.env.JWT_KEY);
console.log('Token c:' , token ? token.slice(0, 30) + '...' : 'none');
console.log('---c-------');

    }
    catch(err){
        res.status(500).json({msg:"Failed to fetch transactions"})
    }
    
}