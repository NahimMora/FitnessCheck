'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import CardGender from '../Components/CardGender';
import Swal from 'sweetalert2'

const ImcPage: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [minIMC, setMinIMC] = useState<number | null>(null);
  const [maxIMC, setMaxIMC] = useState<number | null>(null);

  const handleClickCalculator = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (age && height && weight) {
      setAge(0);
      setHeight(0);
      setWeight(0);
      setResult(null);
      Swal.fire({
        title: `Tu IMC es de ${parseFloat(result?result.toFixed(2):"")}`,
        icon: 'info',
        iconColor: '#001845',
        color: '#001845',
        footer: `Tu peso ideal es ${parseFloat(minIMC?minIMC.toFixed(2):"")}kg - ${parseFloat(maxIMC?maxIMC.toFixed(2):"")}kg `,
        confirmButtonText: 'Hecho',
        confirmButtonColor: '#001845'
      })
    } else {
      Swal.fire({
        title: 'Completa todos los campos',
        background: '#a2d6f9',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const handleResetImc = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (age && height && weight) {
      setAge(0);
      setHeight(0);
      setWeight(0);
      setResult(null);
    } else {
      Swal.fire({
        title: 'Completa todos los campos',
        background: '#a2d6f9',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  useEffect(() => {
    if (age && height && weight) {
      const result = Number(weight) / Math.pow(Number(height) / 100, 2);
      const min = 18.5*(Math.pow(Number(height) / 100, 2))
      const max = 24.9*(Math.pow(Number(height) / 100, 2))
      setResult(result);
      setMinIMC(min)
      setMaxIMC(max)
    }
  }, [age, height, weight]);

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
              <CardGender/>
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuántos años tienes?</label>
            <div className='flex items-center'>
              <input
                type="number"
                placeholder='21'
                className='border-b-2 border-black h-10 w-20 text-2xl text-center font-bold focus:outline-none'
                value={age === 0 ? '' : age}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
              />
              <h1 className='text-xl ml-2'>años</h1>
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuánto mides?</label>
            <div className='flex items-center'>
              <input
                type="number"
                placeholder='170'
                className='w-20 md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
                value={height === 0 ? '' : height}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))}
              />
              <h1 className='text-xl ml-2'>cm</h1>
            </div>
          </span>
        </div>

        <div className='border border-slate-300 h-56 md:rounded-2xl lg:rounded-2xl flex flex-col justify-center'>
          <span className='flex flex-col m-5 items-center'>
            <label className='mb-2 text-xl font-bold'>¿Cuánto pesas?</label>
            <div className='flex items-center'>
              <input
                type="number"
                placeholder='65'
                className='w-20 md:w-16 border-b-2 border-black h-10 text-2xl text-center font-bold focus:outline-none'
                value={weight === 0 ? '' : weight}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value))}
              />
              <h1 className='text-xl ml-2'>kg</h1>
            </div>
          </span>
        </div>
      </form>
      <div className='flex justify-center mt-10'>
        <button
          className='h-12 w-32 border-2 border-blue-500 bg-blue-500 rounded-full text-white hover:bg-blue-900 transition duration-300 ease-in-out'
          onClick={(e) => handleClickCalculator(e)}
        >
          Calcular
        </button>
      </div>
    </section>
  );
};

export default ImcPage;
