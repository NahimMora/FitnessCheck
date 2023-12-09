import Image from 'next/image'
import React from 'react'
import CardGender from '../Components/CardGender'

import iconMale from '../../../public/icons/male.svg'
import iconFemale from '../../../public/icons/female.svg'

const ImcPage = () => {

  return (
    <section className='my-24'>
      <h1 className='text-center text-4xl lg:text-5xl font-extrabold text-slate-700 px-5 mx-auto'>
        Calcula tu IMC
      </h1>
      <p className='text-center text-xl px-5'>
        Para un cálculo correcto necesitamos algo de información básica sobre ti.
      </p>
      <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 mt-10'>
        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuál es tu género?</label>
            <div className='flex flex-row'>
              <CardGender icon={iconMale} name={'Hombre'} />
              <CardGender icon={iconFemale} name={'Mujer'} />
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuántos años tienes?</label>
            <div className='flex items-center'>
              <input type="text" placeholder='21'
                className='w-full md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
              />
              <h1 className='text-xl ml-2'>años</h1>
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuánto mides?</label>
            <div className='flex items-center'>
              <input type="text" placeholder='170'
                className='w-full md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
              />
              <h1 className='text-xl ml-2'>cm</h1>
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuánto pesas?</label>
            <div className='flex items-center'>
              <input type="text" placeholder='65'
                className='w-full md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
              />
              <h1 className='text-xl ml-2'>kg</h1>
            </div>
          </span>
        </div>
      </form>
      <div className='flex justify-center mt-10'>
          <button className='h-12 w-32 border-2 border-blue-500 bg-blue-500 rounded-full text-white hover:bg-blue-900 transition duration-300 ease-in-out'>
            Calcular
          </button>
        </div>
    </section>
  )
}

export default ImcPage
