import style from "../../css/home.module.css"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
export default function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <div className="flex -m-[144px] flex-col w-screen max-w-[900px] h-screen justify-center items-center" >
    <Hero/>
    </div>
    <div id={style.wrapperService} className="-mt-[50px] w-screen flex flex-col justify-center items-center bg-black rad " >
    {/* <Services/> */}
      </div> 

    </>
  )
}
