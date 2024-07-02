import React from 'react'
import style from "../../../css/home.module.css"
export default function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        <h1> Upload & <br />  <span>Print</span> </h1>

        <span>India&apos;  s First Online Print On Demand Service</span> <br />
        {/* <div className={style.buttons}>
          <div className={style.upload}>
          <i class="ri-upload-cloud-2-fill"></i>
            Upload
          </div>
          <i class="ri-arrow-right-line"></i>
          <button>
          <i class="ri-printer-fill"></i>
            Print
            </button>
            <i class="ri-check-double-line"></i>
        </div> */}
      </div>
    </div>
  )
}
