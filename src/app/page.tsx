import Landing from "./Components/Landing";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Landing/>
      {/* <section className="mt-5">
        <h1 className="text-3xl font-bold text-slate-600 text-center">
          Descubre mas
        </h1>
        <div className='flex justify-between lg:mx-40 my-10 w-screen'>
        <TabCard icon={iconFire} alt={'IconCheck'} title={'Calcular IMC'} description=''/>
        <TabCard icon={iconFire} alt={'iconKCAL'} title={'Calcular peso ideal'} description=''/>
        <TabCard icon={iconFire} alt={'iconPI'} title={'Calcular Kcal diarias'} description=''/>
        </div>
      </section> */}
    </main>
  )
}
