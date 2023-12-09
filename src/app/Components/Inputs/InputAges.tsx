import React from 'react'

export interface InputAge{
    age:number;
    setAge:any;
}

const InputAges = ({ age, setAge }:InputAge) => {
  return (
    <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
    <span className='flex flex-col m-5 items-center'>
      <label className='mb-2 text-xl font-bold'>¿Cuántos años tienes?</label>
      <div className='flex items-center'>
        <input
          type="number"
          placeholder='21'
          className='border-b-2 border-black h-10 w-20 text-2xl text-center font-bold focus:outline-none'
          value={age === 0 ? '' : age}
          onChange={(e) => setAge(e.target.value)}
        />
        <h1 className='text-xl ml-2'>años</h1>
      </div>
    </span>
  </div>
  )
}

export default InputAges
