import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Pages/Sidebar";

import Single from '../Assets/single.png';
import Double from '../Assets/double.png';
import Triple from '../Assets/triple.png';

const plans = [
  {
    title: "Basic Plan",
    price: "$99/month",
    features: ["100 GB Storage", "Single User Access", "Email Support"],
    image: Single,
    buttonStyle: "bg-[#00df9a] text-black",
  },
  {
    title: "Pro Plan",
    price: "$199/month",
    features: ["1 TB Storage", "Up to 5 Users", "Priority Support"],
    image: Double,
    buttonStyle: "bg-black text-[#00df9a]",
    cardStyle: "bg-gray-100",
  },
  {
    title: "Enterprise Plan",
    price: "$299/month",
    features: ["Unlimited Storage", "Unlimited Users", "24/7 Dedicated Support"],
    image: Triple,
    buttonStyle: "bg-[#00df9a] text-black",
  },
];

const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full py-[10rem] px-4 bg-gray-50 relative'>
      <Sidebar />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 ${plan.cardStyle || ""}`}
          >
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={plan.image} alt={plan.title} />
            <h2 className='text-2xl font-bold text-center py-8'>{plan.title}</h2>
            <p className='text-center font-medium'>{plan.price}</p>
            <div className='mt-4'>
              {plan.features.map((feature, i) => (
                <p key={i} className='py-2 border-b mx-8'>{feature}</p>
              ))}
            </div>
            <button
              onClick={() => navigate('signin')}
              className={`w-[200px] rounded-md my-6 mx-auto py-3 ${plan.buttonStyle}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
