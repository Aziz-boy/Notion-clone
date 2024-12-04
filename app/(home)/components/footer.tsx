 import React from 'react'
 import { Logo } from './logo'
 import { Button } from '@/components/ui/button'
 
 export const Footer = () => {
   return (
     <div className='flex items-center w-full p-6 bg-background z-50'>
      <Logo />

      <div className='md:m1-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
       <Button>
        Privacy Policy
       </Button>
       <Button>
        Terms & Conditions
       </Button>
      </div>
     </div>
     
   )
 }
 