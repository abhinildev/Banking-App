import React from 'react'
import { useState } from 'react'
import Sidebar from '../Pages/Sidebar'
import { useNavigate } from 'react-router-dom'
const Setting = () => {
    const navigate=useNavigate()
  const [email,setEmail]=useState('daniel@gmail.com')
  const [name,setName]=useState('Daniel Lewis')
  
  const handleSave=e=>{
    e.preventDefault()
    alert('Changes Saved!')
  }
  const handleLogout=()=>{
    alert('Logged out')
    navigate('/')

  }
    return (
    <div className='flex min-h-screen bg-[#0f172a] text-white'>
        <Sidebar/>
        <main className='flex-1 p-6 space-y-8'>
            <h1 className='text-3xl font-bold'>Settings</h1>
            <form
              onSubmit={handleSave}
              className='bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4 max-w-lg'
            >
                <div>
                    <label className='block text-sm text-gray-400 mb-1'>Name</label>
                    <input 
                      className='w-full px-3 py-2 rounded text-black'
                      value={name}
                      onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className='block text-sm text-gray-400 mb-1'>Email</label>
                    <input 
                      className='w-full px-3 py-2 rounded text-black'
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                </div>
            </form>
            <button
            onClick={handleLogout}
            className='bg-red-600 hover-red-700 px-4 py-2 rounded'>
                Logout
            </button>
        </main>
      
    </div>
  )
}

export default Setting
