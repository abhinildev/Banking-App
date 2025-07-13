import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      {/* Left Section */}
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DataPro</h1>
        <p className='py-4'>
          Empower your business with real-time analytics and seamless data
          integration. Stay ahead with powerful insights and optimized strategies.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      {/* Right Section */}
      <div className='lg:col-span-2 flex justify-between mt-8 lg:mt-0'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Data Analytics</li>
            <li className='py-2 text-sm'>Customer Insights</li>
            <li className='py-2 text-sm'>Business Intelligence</li>
            <li className='py-2 text-sm'>Automation</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Blog</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Help Center</li>
            <li className='py-2 text-sm'>Contact</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
