import React, { useState } from 'react';
import Image from 'next/image';

import iconMale from '../../../public/icons/male.svg';
import iconFemale from '../../../public/icons/female.svg';

const gender = [
  {gender: 'male', icon: iconMale, name: 'Hombre'},
  {gender: 'female', icon: iconFemale, name: 'Mujer'}
]

const CardGender = () => {
  
  const [activeGender, setActiveGender] = useState<string | null>(null);
        //male

  const handleClick = (name: string) => {
    if (activeGender === name) {
      setActiveGender(null);
      return;
    }
    setActiveGender(name);
  };

  return (
    <>
    {gender.map((gender, index) => (
      <button
      type="button"
      className={`${
        gender.gender === activeGender
        ? 'bg-blue-300 text-black hover:bg-blue-400'
        : 'bg-slate-100 text-black hover:bg-blue-400'
      } border border-black p-4 w-28 h-32 mt-2 mx-5 rounded-xl hover:scale-105 transition-transform duration-300`}
      onClick={() => handleClick(gender.gender)}
      >
      <div className='flex flex-col items-center'>
        <Image src={gender.icon} alt={gender.gender} width={50} height={50} />
        <p className='mt-4 text-lg font-semibold'>{gender.name}</p>
      </div>
    </button>
    ))}
    </>
  );
};

export default CardGender;
