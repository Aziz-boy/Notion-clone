import React from 'react';
import { Button } from "@/components/ui/button" 
import { Check } from 'lucide-react';


interface PricingCardProps {
        title: string;
        subtitle: string;
        options: string;
        price: string;
        priceId: string;
    }



export const PricingCard = ({
    options, 
    price, 
    subtitle, 
    title, 
    }: PricingCardProps) => {
  return (
    <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:bg-black dark:border-gray-600 dark:text-white xl:p-8'>
       <h3 className='mb-4 text-2xl font-semibold'>
          {title}
       </h3>
       <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
        {subtitle}
       </p>


       <div className='flex items-center justify-center my-8'>
         <span className='text-2xl text-5xl font-extrabold ' >
           {price !== "Free" && "$"}
           {price}
         </span>
         <span className='text-gray-500 dark:text-gray-400'>/month</span>
       </div>


       <Button>
        Get Started
       </Button>

       <ul role="list" className="mt-8 space-y-4 text-left">
         {options.split(", ").map((option) => (
           <li key={option} className='flex items-center space-x-3'>
            <Check className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' />
            <span>{option}</span>
           </li>
           

            ))}
       </ul>
   </div>
  )
}
