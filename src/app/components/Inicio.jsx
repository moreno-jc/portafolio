
export default function Inicio (){
    return (
<section className="flex h-screen items-center bg-main bg-grid bg-no-repeat bg-center">
  <div className="container mx-auto grid grid-col-auto md:grid-cols-2 grid-rows-3 gap-8">

    <div className="flex justify-center text-center md:col-span-2 md:row-start-1">
      <h1 className="text-white font-bold"> 
        <span className="text-4xl">J</span><span className="text-3xl">ocelyn </span>
        <span className="text-4xl">M</span><span className="text-3xl">oreno</span>
      </h1>
    </div>

    <div className="flex justify-center text-center md:col-span-2 md:row-start-2">
      <h3 className="text-sky-600 font-semibold"> 
            <span className="text-3xl">W</span><span className="text-2xl">eb </span>
            <span className="text-3xl">D</span><span className="text-2xl">eveloper</span>
      </h3>
    </div>

    <div className="flex justify-center text-center md:col-span-2 md:row-start-3">
      <img
        src="/github.svg"
        alt="GitHub"
        className="w-[35px] h-[35px] ml-5 mr-5 object-contain filter brightness-0 invert"
      />
      <img
        src="/linkedin.svg"
        alt="LinkedIn"
        className="w-[35px] h-[35px] object-contain filter brightness-0 invert"
      />
    </div>
  </div>
</section>

    )
}