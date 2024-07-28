"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
} from "@nextui-org/react";
import style from "./nav.module.css"
import {useDispatch, useSelector } from "react-redux";
import SignUpCard from "../SignupCard/SignupCard";
import Menu from "./Menu";
import { toggleNav,toggleSignup } from "@/utils/slices/navSlice";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';


export default function NavBar() {
  const dispatch = useDispatch()

  const navbar = useSelector((store) => store?.navbar?.navbar);
  const stateOfSingup = useSelector((store) => store?.navbar?.signup);




  const toggleMenu = ()=>{
    dispatch(toggleNav())
  }

  
  function toggleIt() {
  dispatch(toggleSignup())
  }


  const { user, error, isLoading } = useUser();
  if(user) console.log(user.given_name)

  

  return (
    <>
    {navbar? <Menu/> : null}
      <Navbar>
        <div className={style.Navagation}>
          <div className={style.section1}>
          <i onClick={toggleMenu} class="ri-menu-2-line"></i>
          <Link href={"/"}>
          <h1>Notes Wallah</h1>
          </Link>
          </div>
          <div onClick={toggleIt} className={style.account}>
          {user? <span>hi, {user.given_name}</span> :<span>{!stateOfSingup? "Account": "Close"}</span>}
          
          <i  class="ri-user-smile-fill"></i>
          </div>
          
        </div>
      
      </Navbar>
      {stateOfSingup ? <SignUpCard/> : null}
    </>
  );
}
