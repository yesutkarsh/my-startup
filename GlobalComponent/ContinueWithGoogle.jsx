"use client"
import React, { useCallback } from 'react';
import style from "./ContinueWithGoogle.module.css";
import { signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth } from '@/utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/utils/slices/userSlice';

export default function ContinueWithGoogle() {
  const dispatch = useDispatch();
  const user = useSelector(store => store?.user)
  // console.log(user.photoURL)
  const signUp = useCallback(async () => {
    const provider = new GoogleAuthProvider()
    try {
      signInWithRedirect(auth, provider);
      const userCred = await getRedirectResult(auth);
      // const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
      // dispatch(addUser(userCred.user));
      console.log("Clicked")
    } catch (error) {
      console.error("Error during sign up with Google:", error);
    }
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      {!user?
      <>
      <button onClick={signUp}>
        <i className="ri-google-fill"></i>
        Continue With Google
      </button>
      <p>We value your privacy. By signing in with Google, you agree to our Policies.</p>
      <p className='underline'>Continue Without Sign In</p>
      </>
    : <p>You Are Already Signed In</p>}
      </div>
  );
}