import React from 'react'
import Image from 'next/image';

function DataCard({head, number, desc, bgColor, txtColor,statColor}) {
  return (
    <>
    
    <div className='relative space-y-2 border border-zinc-400 w-1/3 rounded-lg p-3
    hover:text-white hover:bg-primary'>
    <div className=' absolute right-[10%] bg-black fill-black'>
    <Image
    priority
    src='/images/inventory/inventory_tabicon.svg'
    alt='card icon'
    width='18'
    height='18'/>
    </div>
   <p className='text-md pt-3 font-normal pb-4'>{head}</p>
   <p  className='text-3xl font-bold'>{number}</p>
   <p className='text-[12px] hover:text-white' style={{color:statColor}}>{desc}</p>
   </div>
  

   </>
  )
}

export default DataCard