import React from 'react'
import Sidebar from '../Pages/Sidebar'
import BudgeChart from '../Pages/BudgeChart'
const Budgets = () => {
  return (
    <div className='flex min-h-screen bg-[#0f172a] text-white'>
     <Sidebar/>
     <main className='flex-1 p-6 space-y-8'>
      <h1 className="text-3xl font-bold">Budgets Overview</h1>
        <div className='grid grid-cols-1 min-w-dvw'>
          <div className='bg=[#1e293b] p-4 rounded-xl shadow-lg'>
            <p className='text-sm text-gray-400'>Balance (today)</p>
            <h2 className='text-2xl font-bold'>$12,480.70</h2>
          </div>
          <div className='bg=[#1e293b] p-4 rounded-xl shadow-lg'>
            <p className='text-sm text-gray-400'>Avg. monthly spend</p>
            <h2 className='text-2xl font-bold'>$3,250</h2>
          </div>
          <div className='bg=[#1e293b] p-4 rounded-xl shadow-lg'>
            <p className='text-sm text-gray-400'>Projected Nov 25</p>
            <h2 className='text-2xl font-bold'>$3,600</h2>
          </div>
          </div>  
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
            <h2 className='text-xl font-bold mb-4'>
              Budgets <span className='text-xs text-gray-400'>(* projected)</span>
            <BudgeChart/>
               </h2> 
            </div>    
      </main>      
    </div>
  )
}

export default Budgets
