import React, { useState } from 'react';
import Image from 'next/image';

import iconMale from '../../../../public/icons/male.svg';
import iconFemale from '../../../../public/icons/female.svg';

export interface CardGender{
  gender:string;
  setGender:any;
}

const genders = [
  {gender: 'male', icon: iconMale, name: 'Hombre'},
  {gender: 'female', icon: iconFemale, name: 'Mujer'}
]

const CardGender = ({gender,setGender}:CardGender) => {
  const [activeGender, setActiveGender] = useState<string | null>(null);

  const handleClick = (name: string) => {
    if (activeGender === name) {
      setActiveGender(null);
      return;
    }
    setActiveGender(name);
    setGender(name)
  };

  return (
    <div className='flex flex-row '>
      {genders.map((genderItem) => (
        <div key={genderItem.gender}> 
          <button
            type="button"
            className={`${
              genderItem.gender === activeGender
                ? 'bg-blue-300 text-black hover:bg-blue-400'
                : 'bg-slate-100 text-black hover:bg-blue-400'
            } border border-black p-4 w-28 h-32 mt-2 mx-5 rounded-xl hover:scale-105 transition-transform duration-300`}
            onClick={() => handleClick(genderItem.gender)}
          >
            <div className='flex flex-col items-center'>
              <Image src={genderItem.icon} alt={genderItem.gender} width={50} height={50} />
              <p className='mt-4 text-lg font-semibold'>{genderItem.name}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardGender;