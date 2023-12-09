import React from 'react'
import Image from 'next/image'

export interface CardGender{
  icon:string;
  name: string
}

const CardGender = ({icon, name}: CardGender) => {
  return (
    <button className='border border-black p-4 w-28 h-32 mt-2 mx-5 rounded-xl hover:bg-blue-200 hover:scale-105 transition-transform duration-300'>
      <div className='flex flex-col items-center'>
          <Image src={icon} alt={name} width={50} height={50} />
        <p className='mt-4 text-lg font-semibold'>{name}</p>
      </div>
    </button>
  )
}

export default CardGender
