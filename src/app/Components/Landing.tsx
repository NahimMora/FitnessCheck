import React from 'react'
import Image from 'next/image'
import iconCheck from '../../../public/icons/check.svg'
import landingImage from '../../../public/images/LandingImage.png'
import TabCard from './TabCard'

const Landing = () => {
  return (
    <section className='bg-red-50 mt-20 w-full'>
        <h1 className='text-center text-4xl lg:text-5xl font-extrabold text-slate-700 px-auto p-5 mx-10'>
            Emprende el viaje a una vida mas saludable.
        </h1>
        <div className='flex justify-center mt-5 mb-10'>
          <Image src={landingImage} alt='FitCheckLanding' width={300}/>
        </div>
        <div className='flex flex-col justify-around my-10 mx-10 md:flex-row lg:flex-row'>
          <TabCard icon={iconCheck} alt={'IconCheck'} title={'Pierde peso'} description=''/>
          <TabCard icon={iconCheck} alt={'IconCheck'} title={'Aumenta tu masa muscular'} description=''/>
          <TabCard icon={iconCheck} alt={'IconCheck'} title={'Come más sano'} description=''/>
        </div>
    </section>
  )
}

export default Landing