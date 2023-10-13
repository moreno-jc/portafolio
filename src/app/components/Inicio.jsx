export default function Inicio (){
    return (
    <div className="container">
        <div className="flex justify-center">
            <p className="mt-[7rem] tracking-wide text-white "> 
                <span className="text-4xl">J</span><span className="text-3xl">ocelyn </span>
                <span className="text-4xl">M</span><span className="text-3xl">oreno</span>
            </p>        
        </div>
        <div className="flex justify-center">
            <p className="mt-[1rem] tracking-wide text-sky-400/100"> 
                <span className="text-3xl">W</span><span className="text-2xl">eb </span>
                <span className="text-3xl">D</span><span className="text-2xl">eveloper</span>
            </p>        
        </div>
        <div className="flex justify-center mt-2">
            <img
                src="/github.svg"
                alt="search"
                className="w-[30px] h-[30px] object-contain"
            />
             <img
                src="/linkedin.svg"
                alt="search"
                className="w-[30px] h-[30px] object-contain ms-5"
            />
        </div>
        <div className="">
            <img 
            src="/cuadricula.png"
                alt="search"
                className="h-[];
                object-contain"
            />
        </div>
    </div>
    )
}