import React from 'react';
import IconFire from '../../../../public/icons/fire.svg'
import Image from 'next/image';
import Link from 'next/link';

export interface CardHome{
    title:string;
    description:string;
    link:string;
    href:string;
}

const CardHome = ({title, description, link, href}:CardHome) => {
  return (
    <section className='p-4 rounded-lg shadow-md w-72 flex flex-col m-2 items-center'>
      <h3 className='text-2xl font-bold mb-2 text-center h-14'>
        {title}
      </h3>

      <Image src={IconFire} alt='IconFire' width={30}
      className='m-3'
      />

      <p className='text-sm mb-4 text-center h-16'>
        {description}
      </p>

      <button className='w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full'>
        <Link href={href}>
         {link}
        </Link>
      </button>
    </section>
  );
};

export default CardHome;
