'use client'
import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2'
import InputAges from '../Components/Inputs/InputAges';
import InputWeight from '../Components/Inputs/InputWeight';
import InputHeight from '../Components/Inputs/InputHeight';
import InputGerder from '../Components/Inputs/InputGerder';
import ButtonForms from '../Components/Inputs/ButtonForms';

const ImcPage: React.FC = () => {

  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [minIMC, setMinIMC] = useState<number | null>(null);
  const [maxIMC, setMaxIMC] = useState<number | null>(null);
  const [gender, setGender] = useState<string>('')
  
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

        <InputGerder  gender={gender} setGender={setGender}/>

        <InputAges age={age} setAge={setAge}/>

        <InputHeight height={height} setHeight={setHeight}/>

        <InputWeight weight={weight} setWeight={setWeight}/>

      </form>

      <div className='flex justify-center mt-10'>
      <ButtonForms title='Calcula tu IMC' onClickFunction={handleClickCalculator}/>
      </div>
    </section>
  );
};

export default ImcPage;
