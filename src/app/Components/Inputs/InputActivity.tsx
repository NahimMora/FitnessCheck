import React from 'react'
import CardActivity from '../Cards/CardActivity'

interface InputActivity{
    activity:number;
    setActivity:any;
}

const InputActivity = ({activity,setActivity}:InputActivity) => {
  return (
    <div className='border border-slate-300 py-5 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
    <span className='flex flex-col items-center'>
      <label className='mb-2 text-xl font-bold'>¿Cómo de activo eres a diario?</label>
      <div className=''>
        <CardActivity activity={activity} setActivity={setActivity}/>
      </div>
    </span>
    </div>
  )
}

export default InputActivity
