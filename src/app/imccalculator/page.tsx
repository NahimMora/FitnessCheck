'use client'
import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2'
import InputAges from '../Components/Inputs/InputAges';
import InputWeight from '../Components/Inputs/InputWeight';
import InputHeight from '../Components/Inputs/InputHeight';
import InputGerder from '../Components/Inputs/InputGerder';
import ButtonForms from '../Components/Inputs/ButtonForms';
import CardsAlerts from '../Components/Cards/CardsAlerts';

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
      <p className='text-center text-xl px-5 mt-5'>
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

    <CardsAlerts 
      info='No uses esta calculadora de IMC si eres menor de 18 años, si estás embarazada o si tienes algún trastorno alimenticio.'
    />

    <div className='m-5'>
      <p className='text-lg leading-7 text-gray-700'>
      El índice de masa corporal (IMC) es una medida utilizada para evaluar el peso corporal de una persona en relación con su altura. Un IMC saludable se sitúa entre 18,5 y 24,9, mientras que un IMC por encima de 25 se considera sobrepeso, y un IMC superior a 30 indica obesidad.<br/><br/>
      El IMC es una herramienta útil para evaluar el peso corporal de una persona, pero no es una medida perfecta y debe considerarse en conjunto con otros factores de salud importantes. Mantener un IMC saludable es importante para reducir el riesgo de enfermedades crónicas y mejorar la calidad de vida a largo plazo.
      </p>
    </div>

    <CardsAlerts
      info='Si tienes preguntas o preocupaciones sobre tu IMC o tu salud en general, es importante hablar con un profesional de la salud.'
    />

    </section>
  );
};

export default ImcPage;
