import React from 'react'
import Laptop from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md: grid-cols-2'>
         <img  className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
         <div  className='flex flex-col justify-center'>
            <p className='text-[#00cf9a] font-bold'>Data Analytics DashBoard</p>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id non laborum! Dolores veniam libero iste exercitationem laudantium, excepturi officia obcaecati inventore unde, minus porro esse repudiandae at repellendus magni!

            </p>
               <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-black'>Get Started</button>
             
         </div>
       
      </div>
    </div>
  )
}

export default Analytics
