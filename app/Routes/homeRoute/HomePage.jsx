import style from "../../css/home.module.css"
import Hero from "./Components/Hero"
import WhatToPrint from "./Components/WhatToPrint"
export default function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <div className="inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex justify-center">

    <div className="flex -m-[144px] flex-col w-screen max-w-[900px] h-screen justify-center items-center" >
    <Hero/>
    </div>
    </div>
    <div id={style.wrapperService} className="-mt-[50px] w-screen flex flex-col justify-center items-center bg-black rad " >
      </div> 
    </>
  )
}
