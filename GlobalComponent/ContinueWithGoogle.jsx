"use client";
import React, { useCallback, useEffect, useState } from 'react';
import style from "./ContinueWithGoogle.module.css";
import { signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth } from '@/utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/utils/slices/userSlice';

export default function ContinueWithGoogle() {
  const dispatch = useDispatch();
  const user = useSelector(store => store?.user);

  const [isMobile, setIsMobile] = useState(false);

  const signUp = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      if (isMobile) {
        await signInWithRedirect(auth, provider);
        const userCred = await getRedirectResult(auth);
        if (userCred) {
          dispatch(addUser(userCred.user));
        }
      } else {
        const userCred = await signInWithPopup(auth, provider);
        dispatch(addUser(userCred.user));
      }
      console.log("Clicked");
    } catch (error) {
      console.error("Error during sign up with Google:", error);
    }
  }, [isMobile, dispatch]);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log('User Agent:', userAgent);  // Log the user agent to debug
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsMobile(mobileCheck);
    console.log("Currently isMobile =", mobileCheck);
  }, []);

  return (
    <div className={style.wrapper}>
      {!user ? (
        <>
          <button onClick={signUp}>
            <i className="ri-google-fill"></i>
            Continue With Google
          </button>
          <p>We value your privacy. By signing in with Google, you agree to our Policies.</p>
          <p className='underline'>Continue Without Sign In</p>
        </>
      ) : (
        <p>You Are Already Signed In</p>
      )}
    </div>
  );
}
