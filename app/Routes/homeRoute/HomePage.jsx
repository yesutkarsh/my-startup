import style from "../../css/home.module.css"
import Hero from "./Components/Hero"
import WhatToPrint from "./Components/WhatToPrint"
export default function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <div className="">

    <div className="flex -m-[144px] flex-col w-screen max-w-[900px] h-screen justify-center items-center" >
    <Hero/>
    </div>
    </div>
    
    </>
  )
}
