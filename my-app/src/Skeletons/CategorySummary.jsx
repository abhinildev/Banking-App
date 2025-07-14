import React,{useState,useEffect} from 'react'
import Sidebar from '../Pages/Sidebar'
import axios from '../Api/axios.js'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
const CategorySummary = () => {
    const [categoryData,setCategoryData]=useState(null)
   
   useEffect(()=>{
    const fetchCategorySummary=async()=>{
        try{
            const token=localStorage.getItem('token')
            const res= await axios.get('/transaction/category-summary',{
                headers:{Authorization:`Bearer ${token}`}
            })
            setCategoryData(res.data)
        }catch(err){
            console.error('Error fetching category summary',err)
        }
    }
    fetchCategorySummary()
   },[])
 if(!categoryData)
   { return (
  <div className='flex min-h-screen bg-[#f172a] text-white'>
    <Sidebar/>
    <main className='flex-1 p-6'>
        <p>Loading category summary...</p>
    </main>
  </div>

    )}
    const labels=Object.keys(categoryData)
    const dataValues=Object.values(categoryData)
    const colors=labels.map((_,i)=>{
        `hsl(${(i*360)/labels/length},70%,50%)`
    })
    const pieData={
        labels,
        datasets:[{
            label:'$ spent',
            data: dataValues,
            backgroundColor:colors,
            borderWidth:1
    }]
    }
  return (
    <div className='flex min-h-screen bg-[#0f172a] text-white'>
        <Sidebar/>
        <main className='flex-1 p-6 space-y-6'>
            <h1 className='text-3xl font-bold'>Spending By Category</h1>
            <div className='bg-[#1e293b] p-6 rounded-xl shadow-lg max-w-md'>
                <Pie data={pieData}/>
            </div>
        </main>
      
    </div>
  )
}

export default CategorySummary
