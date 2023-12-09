import React from 'react'

export interface InputHeight{
    height:number;
    setHeight:any;
}

const InputHeight = ({height, setHeight}:InputHeight) => {
  return (
    <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
    <span className='flex flex-col m-5 items-center'>
      <label className='mb-2 text-xl font-bold'>¿Cuánto mides?</label>
      <div className='flex items-center'>
        <input
          type="number"
          placeholder='170'
          className='w-20 md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
          value={height === 0 ? '' : height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <h1 className='text-xl ml-2'>cm</h1>
      </div>
    </span>
  </div>
  )
}

export default InputHeight
