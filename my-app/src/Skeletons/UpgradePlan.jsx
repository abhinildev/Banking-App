import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'
import { useNavigate } from 'react-router-dom'

const Cards = () => {

  const navigate=useNavigate()
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-50'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>

        {/* Single User Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='Single User' />
          <h2 className='text-2xl font-bold text-center py-8'>Basic Plan</h2>
          <p className='text-center font-medium'>$99/month</p>
          <div>
            <p className='py-2 border-b mx-8 mt-8'>100 GB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>Single User Access</p>
            <p className='py-2 border-b mx-8 mt-8'>Email Support</p>
          </div>
          <button onClick={()=>navigate('signin')} className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>

        {/* Double User Card */}
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto bg-transparent mt-[-3rem] ' src={Double} alt='Double User' />
          <h2 className='text-2xl font-bold text-center py-8'>Pro Plan</h2>
          <p className='text-center font-medium'>$199/month</p>
          <div>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>Up to 5 Users</p>
            <p className='py-2 border-b mx-8 mt-8'>Priority Support</p>
          </div>
          <button onClick={()=>navigate('signin')} className='bg-black text-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3'>Get Started</button>
        </div>

        {/* Triple User Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='Triple User' />
          <h2 className='text-2xl font-bold text-center py-8'>Enterprise Plan</h2>
          <p className='text-center font-medium'>$299/month</p>
          <div>
            <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>Unlimited Users</p>
            <p className='py-2 border-b mx-8 mt-8'>24/7 Dedicated Support</p>
          </div>
          <button onClick={()=>navigate('signin')} className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Cards
