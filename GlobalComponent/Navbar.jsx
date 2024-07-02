"use client"
import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, } from "@nextui-org/react";
import style from "../app/css/home.module.css"
import ContinueWithGoogle from "./ContinueWithGoogle";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/utils/slices/userSlice";
export default function NavBar() {

  const user = useSelector(store => store?.user)
  // console.log(user.photoURL)
  

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [toggleSinup, settoggleSinup] = useState(false)
  function toggleIt(){
    settoggleSinup(!toggleSinup)
  }
  const menuItems = [
    "Print A4",
    "Notes To Book",
    "About Us",
    "Contact Us",
    "How We Ship",
    "Log Out",
  ];



  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);


  return (
    <>

    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">NOTES LIBRARY </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={toggleIt} as={Link} color="primary" href="#" variant="flat">
            {user?<img style={{borderRadius:"50%", height:"40px"}} src={user.photoURL}></img>:`${!toggleSinup?"Sign Up":"Close"}`
            }

          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>


    </Navbar>
    {toggleSinup? <ContinueWithGoogle/> : null}
    
</>
  );
}
