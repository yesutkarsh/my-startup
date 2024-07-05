import React, { useRef, useState } from 'react'
import style from "./email.module.css"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { addUser } from '@/utils/slices/userSlice';
import { useDispatch } from 'react-redux';


export default function ContinueWithEmail() {



    const [signInOrSignup, setSignINorSignUp] = useState(true)
    function changeForm(){
        setSignINorSignUp(!signInOrSignup)
    }

    // FALSE == SIGN IN
    // TRUE == SIGNUP


    // FORM REFERENCE
    const displayName = useRef()
    const Semail = useRef()
    const Spassword = useRef()

    const Lemail = useRef()
    const Lpassword = useRef()

    const dispatch = useDispatch()
    // FIREBASE LOGIN
    const userAuth = ()=>{
            createUserWithEmailAndPassword(auth,Semail.current.value,Spassword.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(addUser(user))
                return updateProfile(user, {
                  displayName: displayName.current.value // Get this value from your signup form
                });

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                // ..
                console.log(errorMessage)
            
              });
    }



    const login = ()=>{
      signInWithEmailAndPassword(auth, Lemail, Lpassword)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    
  return (
    <>
    <div className={style.dark}></div>
    <div className={style.wrapper}>
        <form onSubmit={(e)=>{e.preventDefault()}} action="">
            {signInOrSignup?
            <>
        <input type="text" placeholder='First Name'  required/>
        
        <input ref={Semail} type="email" placeholder='Email'  required/>
        <input ref={Spassword} type="password" placeholder='Password'  required/>
        
        <button onClick={userAuth} type='submit'>SIGN UP</button>
            </>
    :
    <>
    
    <input ref={Lemail} type="email" placeholder='Email'  required/>
    <input ref={Lpassword} type="password" placeholder='Password'  required/>
    
    <button onClick={login} type='submit'>
        {signInOrSignup?"SIGN UP": "SIGN IN"}
        </button>
        </>
    }
            
    <p onClick={changeForm}>
        {signInOrSignup?" Already have account? Sign In":"First time! Create Account!"}
       
        </p>

        </form>
    </div>
    </>
  )
}
