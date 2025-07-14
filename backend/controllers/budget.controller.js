import Transaction from '../model/transaction.model.js';
import User from '../model/user.model.js';
export const getBudgetSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const transactions = await Transaction.findAll({
      where: { userId },
      order: [['createdAt', 'ASC']],
    });

    const now = new Date();
    const currentMonth = now.getMonth();
    const monthlySums = {};

    let totalSpend = 0;
    let monthCount = 0;
    let currentBalance = 0;

    transactions.forEach(tx => {
      const date = new Date(tx.createdAt);
      const key = date.toLocaleString('default', { month: 'short' });

      if (!monthlySums[key]) monthlySums[key] = 0;
      if (tx.type.toLowerCase() === 'donation') {
        monthlySums[key] += Number(tx.amount);
        currentBalance += Number(tx.amount);
      } else {
        monthlySums[key] -= Number(tx.amount);
        currentBalance -= Number(tx.amount);
      }
    });

    const recentMonths = Object.keys(monthlySums).slice(-4);
    const recentSpend = recentMonths.map(m => monthlySums[m]);
    totalSpend = recentSpend.reduce((a, b) => a + b, 0);
    monthCount = recentSpend.length;

    const avgMonthlySpend = monthCount ? totalSpend / monthCount : 0;

    res.json({
      currentBalance,
      avgMonthlySpend,
      projectedNextMonth: avgMonthlySpend * 1.05,
      monthlyData: recentMonths.map(m => ({ month: m, spend: monthlySums[m] }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Budget summary fetch failed" });
  }
};
export const setBudgetLimit=async(req,res)=>{
  const {budgetLimit}=req.body
  try{
  
    const user=await User.update({budgetLimit},{where:{id:req.user.id}})
    res.json({msg:"Budget Limit set",budgetLimit})
  }catch(error){
    res.status(500).json({msg:"Failed to set budget"})
  }

}
export const getBudgetLimit=async(req,res)=>{
  try {
    const user =await User.findByPk(req.user.id)
    res.json({budgetLimit:user.budgetLimit})
    
  } catch (error) {
    res.status(500).json({msg:"Failed to set budget"})
  }
}