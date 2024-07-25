import React from "react";
import style from "./menu.module.css";
import Link from "next/link";
import { toggleNav } from "@/utils/slices/navSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
export default function Menu() {

    const dispatch = useDispatch()
  
    const toggleMenu = ()=>{
      dispatch(toggleNav())
    }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className={style.menu}>
      <ul>
        <Link href={"/"}>
        <li onClick={toggleMenu}>Home</li>
        </Link>
        <Link href="/about">
          <li onClick={toggleMenu}>About</li>
        </Link>
        <Link href="/policy">
          <li onClick={toggleMenu}>Privacy Policy</li>
        </Link>
        <Link href="/contact">
          <li onClick={toggleMenu}>Contact & Refund</li>
        </Link>
      </ul>
    </motion.div>
  );
}
