import CardHome from "./Components/Cards/CardHome";
import Landing from "./Components/Landing";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Landing/>
      <div className="bg-white m-5 flex justify-around w-full flex-wrap">
        <CardHome 
          title="Calcula tu IMC" 
          description="Calcula tu IMC y toma el control de tu salud. ¡Comienza ahora!"
          link="Empieza aqui"
          href="/imccalculator"
        />

        <CardHome 
          title="Calcula tus calorías diarias" 
          description="Calcula tus calorías diarias y alcanza tus metas de bienestar. ¡Comienza ahora!" 
          link="Empieza aqui"
          href="/cdcalculator"
        />
      </div>
    </main>
  )
}
