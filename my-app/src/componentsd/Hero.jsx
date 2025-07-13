import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactTyped} from "react-typed"

const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Growing With Data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with data</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-3xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <ReactTyped className='md:text-3xl sm:text-4xl md:pl-2 text-xl font-bold pl-2' strings={['You','Credits','Assets']} typeSpeed={120} backSpeed={140} loop></ReactTyped>
         
        </div>
         <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data Analytics for increased revenue,investments and more</p>
         <button onClick={()=>navigate('signin')}
          className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
