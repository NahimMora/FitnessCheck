import Image from 'next/image';
import React from 'react'

export interface Card{
    icon: string;
    alt: string;
    title: string;
    description: string;
}

const TabCard = ({icon, alt, title, description} : Card) => {
  return (
    <span className='text-center flex flex-row items-center md:flex-col lg:flex-col w-30'>
    <Image src={icon} alt={alt}/>
    <h1 className='mt-2 text-xl w-35 ml-4 md:ml-0 lg:ml-0 text-left'>{title}</h1>
    <p>{description}</p>

  </span>
  )
}

export default TabCard