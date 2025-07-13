import React,{useState} from "react"
import axios from "../Api/axios.js"


const AddTransaction = ({onTransactionAdded}) => {
const [form ,setForm]=useState({type:'',amount:''})
const [loading,setLoading]=useState(false)
const handleChange=(e)=>{
const {name,value}=e.target;
setForm((prevForm)=>({...prevForm,[name]:value}))
}
const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
    
        const token=localStorage.getItem('token')
       console.log(token)
        await axios.post('/transaction/add',form,{
            headers:{Authorization:`Bearer ${token}`}
        })
        setForm({type:'',amount:''})
        onTransactionAdded()
        console.log(token)
    }catch(err){
        alert(err.response?.data?.msg || "Failed to add transactions")

    }finally{
        setLoading(false)
    }
}

    return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-[#1e293b] p-4 rounded-xl shadow-md">
      <div>
        <label className="block text-sm text-white">Transaction Type</label>
        <input
        type="text"
        name="type"
        value={form.type}
        onChange={handleChange}
        required
        placeholder="e.g Donations, Contributions"
        className="w-full p-2 bg-[#334155] rounded text-white"
        />
      </div> 
      <div>
        <label className="block text-sm text-white">Amount (USD)</label>
        <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        required
        placeholder="e.g 250.00"
        className="w-full p-2 bg-[#334155] rounded text-white"
        />
      </div>
      <button 
      type="submit"
      className="bg-[#00df9a] text-black px-4 py-2 rounded hover:scale-105 transition-transform"
      >

        {loading ? 'Adding...': 'Add transaction'}
      </button>
      
    </form>
  )
}

export default AddTransaction
