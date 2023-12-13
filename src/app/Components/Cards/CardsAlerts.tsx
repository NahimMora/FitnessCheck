import React from 'react';
import IconAlert from '../../../../public/icons/alert.svg';
import Image from 'next/image';

export interface CardsAlerts{
    info:string;
}

const CardsAlerts = ({info}:CardsAlerts) => {

  return (
    <section className='bg-[#FFF4E2] w-auto m-5 p-4 rounded-md flex items-center'>
      <Image src={IconAlert} alt='IconAlert' width={50} className='m-3'/>
      <p className="text-gray-800 text-xl">{info}</p>
    </section>
  );
};

export default CardsAlerts;
