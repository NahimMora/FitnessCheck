'use client'
import React, { FormEvent, use, useEffect, useState } from 'react'

import InputAges from '../Components/Inputs/InputAges';
import InputWeight from '../Components/Inputs/InputWeight';
import InputHeight from '../Components/Inputs/InputHeight';
import InputGerder from '../Components/Inputs/InputGerder';
import ButtonForms from '../Components/Inputs/ButtonForms';
import InputActivity from '../Components/Inputs/InputActivity';

import Swal from 'sweetalert2'
import CardsAlerts from '../Components/Cards/CardsAlerts';

const CdPage = () => {

  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [activity, setActivity] = useState<number>(0);
  const [gender, setGender] = useState<string>('')
  const [kcalKeep, setkcalKeep] = useState<number | null>(null);
  const [kcalUp, setKcalUp] = useState<number | null>(null);
  const [kcalDown, setKcalDown] = useState<number | null>(null);

  const handleClickCalculator = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(age && height && weight && activity && gender) {
      setAge(0);
      setHeight(0);
      setWeight(0);
      setActivity(0);
      setkcalKeep(null);
      setKcalUp(null);
      setKcalDown(null);
      Swal.fire({
        title: `<span style="color: #001845;">Tus calorías de mantenimiento son</span> <strong>${parseInt(kcalKeep ? kcalKeep.toFixed(0) : "")}kcal - ${parseInt(kcalKeep ? String(Number(kcalKeep.toFixed(0)) + 200) : "")}kcal</strong>`,
        html: `<span style="color: #001845;">Para bajar de peso:</span> ${parseInt(kcalDown ? kcalDown.toFixed(0) : "")}kcal - ${parseInt(kcalDown ? String(Number(kcalDown.toFixed(0)) + 200) : "")}kcal<br>
               <span style="color: #001845;">Para subir de peso:</span> ${parseInt(kcalUp ? kcalUp.toFixed(0) : "")}kcal - ${parseInt(kcalUp ? String(Number(kcalUp.toFixed(0)) + 200) : "")}kcal`,
        icon: 'info',
        iconColor: '#001845',
        confirmButtonText: 'Hecho',
        confirmButtonColor: '#001845',
        // Agregar estilos adicionales al pie de página
        footer: '<span style="color: #001845;">¡Equilibrando tu dieta!</span>'
      });
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
    if(age && height && weight && activity && gender) {
      const result = (88.3+(13.3*weight)+(4.7*height)-(5.6*age))*activity
      setkcalKeep(result)
      setKcalUp(result+300)
      setKcalDown(result-300)
    }
  },[age, height, weight, activity, gender])

  return (
    <section className='my-24'>
      <h1 className='text-center text-4xl lg:text-5xl font-extrabold text-slate-700 px-5 mx-auto'>
        Calcula tus calorias diarias
      </h1>
      <p className='text-center text-xl px-5'>
        Para un cálculo correcto necesitamos algo de información básica sobre ti.
      </p>
      <form>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 mt-10'>
      <InputGerder gender={gender} setGender={setGender}/>

      <InputAges age={age} setAge={setAge}/>

      <InputHeight height={height} setHeight={setHeight}/>

      <InputWeight weight={weight} setWeight={setWeight}/>
      </div>

      <div className='gap-4 px-5 mt-5'>
      <InputActivity activity={activity} setActivity={setActivity}/>
      </div>

      </form>

      <div className='flex justify-center my-10'>
        <ButtonForms title='Calcula tus calorías diarias recomendadas' onClickFunction={handleClickCalculator}/>
      </div>

      <CardsAlerts 
      info='No uses esta calculadora si eres menor de 18 años, si estás embarazada o si tienes algún trastorno alimenticio.'
    />

    <div className='m-5'>
      <p className='text-lg leading-7 text-gray-700'>
      Calcular las calorías diarias es crucial para lograr objetivos de salud y bienestar. Establece metas realistas y adapta tu ingesta calórica según tus objetivos, ya sea perder, mantener o ganar peso. Además, considera la calidad de los alimentos, priorizando opciones nutritivas.<br/><br/>
      Recuerda que la hidratación adecuada y el ejercicio regular son componentes clave de un estilo de vida saludable. Escucha las señales de tu cuerpo y ajusta tu dieta según tus necesidades y preferencias.
      </p>
    </div>

    <CardsAlerts
      info='Si tienes preguntas o preocupaciones sobre tu peso o salud en general, es importante hablar con un profesional de la salud.'
    />


    </section>
  )
}

export default CdPage
