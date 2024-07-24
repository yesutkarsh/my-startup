import React from "react";
import style from "../../../css/WhatToPrint.module.css";
import Image from "next/image";
import Link from "next/link";
import a4 from "../../../../public/assets/a4.jpg";

import notes from "../../../../public/assets/notes.png";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleWhatTOPrint } from "@/utils/slices/navSlice";

export default function WhatToPrint() {
    const dispatch = useDispatch()
    function showHideCardd(){
      dispatch(toggleWhatTOPrint())
    }

    function Card({title,description,img}){
        return(<>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className={style.wrapper}>
        <Image src={img} alt="Picture of the author" />
        <div>
            <span>{title}</span>
            <p>{description}</p>
            <Link href={"/handleUpload"}>
            <button>Print <i class="ri-printer-cloud-fill"></i></button>
            </Link>
        </div>
      </motion.div>
        </>)
    }

  return (
    <div className={style.main}>
    <Card title="Normal PRINT" description="A3 | A4 | A5 |A6" img={a4}/>
    <Card title="Notes To Book" description="Hand Written Notes To Book | HandWritten Notes Printout" img={notes}/>
    <button onClick={showHideCardd}>Close Menu</button>
    

    </div>
  );
}
