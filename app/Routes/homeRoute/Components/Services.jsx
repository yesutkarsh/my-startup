import React from 'react'
import style from "../../../css/home.module.css"
export default function Services() {
  return (
    <>
    <div className={style.label}>
        Our Services
    </div>



  

    <div className={style.Services}>
        <div className={style.service}>
            <div className={style.card}>
                <div>
                <span className='font-extrabold text-3xl'>NOTES</span> <br />
                <span className='font-bold text-gray-700'>TO BOOK</span>

                </div>
            </div>
            <div className={style.Info}>
                Convert Your Handwritten Notes to Book.
            </div>
        </div>
    </div>


    <div className={style.Services}>
        <div className={style.service}>
        
            <div className={style.Info}>
                A4 COLOR | B&W PRINT starting from Rs. 1
            </div>


            <div className={style.card}>
                <div>
                <span className='font-extrabold text-3xl'>A4 PRINT</span> <br />
                <span className='font-bold text-gray-700'>@ 1Rs</span>

                </div>
            </div>
        </div>
    </div>



    <div className={style.Services}>
        <div className={style.service}>
            <div className={style.card}>
                <div>
                <span className='font-extrabold text-1xl'>VISITING CARD</span> <br />
                <span className='font-bold text-gray-700'>@ ₹3 Per Card</span>

                </div>
            </div>
            <div className={style.Info}>
                VISITING CARD PERSONAL / BUSINESS
            </div>
        </div>
    </div>




    </>
  )
}
