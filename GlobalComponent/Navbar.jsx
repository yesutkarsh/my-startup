"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
} from "@nextui-org/react";
import style from "./nav.module.css";
import ContinueWithGoogle from "./ContinueWithGoogle";
import {useSelector } from "react-redux";
export default function NavBar() {
  const user = useSelector((store) => store?.user);
  // console.log(user.photoURL)

  const [toggleSinup, settoggleSinup] = useState(false);
  function toggleIt() {
    settoggleSinup(!toggleSinup);
  }

  return (
    <>
      <Navbar >
        <div className={style.Navagation}>
          <div className={style.section1}>
          <i class="ri-menu-2-line"></i>
          <h1>Notes Wallah</h1>
          </div>
          <i onClick={toggleIt} class="ri-user-smile-fill"></i>
        </div>
      </Navbar>
      {toggleSinup ? <ContinueWithGoogle /> : null}
    </>
  );
}
