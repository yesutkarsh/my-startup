"use client";
import React, { useCallback, useEffect, useState } from 'react';
import style from "./SignupCard.module.css"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@/utils/firebase';
import ContinueWithEmail from '../EmailPassword/ContinueWithEmail';
import { motion } from 'framer-motion';
import { toggleSignup } from '@/utils/slices/navSlice';
export default function SignUpCard() {
  const dispatch = useDispatch();
  const user = useSelector(store => store?.user);

  const stateOfSingup = useSelector((store) => store?.navbar?.signup);

  const [isMobile, setIsMobile] = useState(false);

  const toggleSingup = ()=>{
    dispatch(toggleSignup())
  }

// Emial Signup button toggle
  const [emailSignup, settoggleEmailSinup] = useState(false)

  function toogleEmailSignup(){
    settoggleEmailSinup(!emailSignup)
  }

// Signout
const signOutNow = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


  const signUp = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    try {
      if (isMobile) {
        signInWithRedirect(auth, provider);
        const userCred = getRedirectResult(auth);
        if (userCred) {
          dispatch(addUser(userCred.user));

        }
      } else {
        const userCred = await signInWithPopup(auth, provider);
        dispatch(addUser(userCred.user));
      }
      // console.log("Clicked");
    } catch (error) {
      console.error("Error during sign up with Google:", error);
    }
  }, [isMobile, dispatch]);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // console.log('User Agent:', userAgent);  // Log the user agent to debug
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsMobile(mobileCheck);
    // console.log("Currently isMobile =", mobileCheck);
  }, []);

  return (
    <>
    {emailSignup? <ContinueWithEmail/> : null}

    <motion.div initial={{bottom:-100,opacity:0}} animate={{bottom:0,opacity:1}} className={style.wrapper}>
      {!user ? (
        <>
        <div onClick={toggleSingup} className={style.navinnav}>
          Close <i class="ri-close-circle-fill"></i>
        </div>
          <button onClick={signUp}>
            <i className="ri-google-fill"></i>
            Continue With Google
          </button>
          <br />
          <button onClick={toogleEmailSignup}>
          <i class="ri-mail-lock-fill"></i>
            Continue With Email
          </button>
          <p>We value your privacy. By signing in with Google, you agree to our Policies.</p>
          <p  onClick={toggleSingup}  className='underline'>Continue Without Sign In</p>
        </>
      ) : (
<>
        <p>You Are Already Signed In</p>
        <button onClick={signOutNow}>Sign Out</button>
</>
      )}
    </motion.div>
      </>
  );
}
