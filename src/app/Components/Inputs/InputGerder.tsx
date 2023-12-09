import React from 'react'
import CardGender from '../Cards/CardGender'

export interface InputGender{
  gender:string;
  setGender:any;
}

const InputGerder = ({gender,setGender}:InputGender) => {
  return (
    <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
    <span className='flex flex-col m-5 items-center'>
      <label className='mb-2 text-xl font-bold'>¿Cuál es tu género?</label>
      <div className='flex flex-row'>
        <CardGender gender={gender} setGender={setGender}/>
      </div>
    </span>
  </div>
  )
}

export default InputGerder
