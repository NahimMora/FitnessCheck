import React, {useState} from 'react'
import Image from 'next/image'

import icon1 from '../../../../public/icons/iconChair.svg'
import icon2 from '../../../../public/icons/iconStandUp.svg'
import icon3 from '../../../../public/icons/iconWalking.svg'
import icon4 from '../../../../public/icons/iconHandling.svg'

export interface CardActivity{
    activity:number;
    setActivity:any;
}

const activitys = [
    {value: 1.2, name:'No muy activo', icon: icon1, description: 'Sobre todo sentado (ej. trabajo de oficina)'},
    {value: 1.375, name:'Medianamente activo', icon: icon2, description: 'Sobre todo de pie (ej. cajero, profesor)'},
    {value: 1.55, name:'Activo', icon: icon3, description: 'Sobre todo andando (ej. vendedor, camarero)'},
    {value: 1.725, name:'Muy activo', icon: icon4, description: 'Trabajos físicos (ej. construcción, gym)'},
]

const CardActivity = ({activity,setActivity}:CardActivity) => {

  const [activeActivity, setActiveActivity] = useState<number | null>(null);

  const handleClick = (value: number) => {
    if (activeActivity === value) {
        setActiveActivity(null);
        return
    }
    setActiveActivity(value)
    setActivity(value)
  }

  return (
    <div className='flex flex-wrap flex-row justify-center'>
      {activitys.map((activityItem) => (
        <div key={activityItem.value}> 
          <button
            type="button"
            className={`${
                activityItem.value === activeActivity
                ? 'bg-blue-300 text-black hover:bg-blue-400'
                : 'bg-slate-100 text-black hover:bg-blue-400'
            } border border-black p-4 w-36 h-32 mt-2 mx-1 rounded-xl hover:scale-105 transition-transform duration-300`}
            onClick={() => handleClick(activityItem.value)}
          >
            <div className='flex flex-col items-center'>
              <Image src={activityItem.icon} alt={activityItem.name} width={50} height={50} />
              <p className='m-1 text-lg font-semibold'>{activityItem.name}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}

export default CardActivity