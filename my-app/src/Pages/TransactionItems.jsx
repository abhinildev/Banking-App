import React from 'react'

const TransactionItems = ({name,type,amount,date}) => {
    const isPositive=amount>=0;
  return (
    <div className='flex justify-between items-center bg-[#0f172a] p-4 rounded'>
    <div>
       <p className='text-sm'>{type}</p>
       <p className='text-xs text-gray-400'>{name}</p>
    </div>
      <div className={`text-sm font-semibold ${isPositive ? 'text-green-400':'text-red-400'}`}>
        {isPositive ?'+':'-'}${Math.abs(amount).toFixed(2)}
      </div>
      <div className='text-xs text-gray-500'>{date}</div>
    </div>
  )
}

export default TransactionItems
