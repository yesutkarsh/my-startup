import React from "react";
import style from "../../../css/home.module.css";
import service1 from "../../../../public/assets/service1.png";
import service2 from "../../../../public/assets/service2.png";

import Image from "next/image";
export default function Services() {
  return (
    <>
      <div className={style.label}>Explore</div>

      <div className={style.services}>
        <Image src={service1} alt="Picture of the author" />
        <Image src={service2} alt="Picture of the author" />

      </div>
    </>
  );
}
