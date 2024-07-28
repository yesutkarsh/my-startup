import style from "../../../css/home.module.css";
import { useState } from "react";
import WhatToPrint from "./WhatToPrint";
import { useDispatch, useSelector } from "react-redux";
import { toggleWhatTOPrint } from "@/utils/slices/navSlice";

export default function Hero() {
  const showCards = useSelector((store) => store?.navbar?.whatToPrints);
  const dispatch = useDispatch()
  function showHideCardd(){
    dispatch(toggleWhatTOPrint())
  }
  return (
    <>
    <div className={style.container}>

    <div className={style.wrapper}>
      <div className={style.hero}>
        <h1>Upload & <br /> <span>Print</span></h1>
        <span>India First Online Print On Demand Service</span> 
        <br />
      </div>
      <div onClick={showHideCardd} className={style.print}>
          <span>Print My Document</span>
        <i className="ri-arrow-right-line"></i>
      </div>
    </div>

    <div className={style.services}>
      <div>My Notes <i class="ri-arrow-right-up-line"></i></div>
      <div>Browse Notes <i class="ri-arrow-right-up-line"></i></div>
      <div>Upload Notes <i class="ri-arrow-right-up-line"></i></div>
      <p>All activity performed like Notes You Download | Upload | Like | Push | Pull Down are publically visible.</p>


    </div>
    
    </div>
    {showCards?<WhatToPrint/>:null}
    
    </>

  );
}
