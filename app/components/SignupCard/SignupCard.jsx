"use client";
import style from "./SignupCard.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleSignup } from '@/utils/slices/navSlice';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function SignUpCard() {
  const dispatch = useDispatch();
  // const user = useSelector(store => store?.user);

  const stateOfSingup = useSelector((store) => store?.navbar?.signup);


  const toggleSingup = ()=>{
    dispatch(toggleSignup())
  }




  const { user, error, isLoading } = useUser();

  return (
    <>

    <motion.div initial={{bottom:-100,opacity:0}} animate={{bottom:0,opacity:1}} className={style.wrapper}>
        <>
        {!user?
            
            <a href="/api/auth/login">
          <button>
          
          <i class="ri-user-3-fill"></i>
            Continue With Account
          </button>
            </a>
            :
          <div id={style.other} className="pt-5 flex gap-10">
            <a href="/api/auth/me">
          <span>
          <i class="ri-user-follow-fill"></i>
            Me
            </span>
            </a>
            <a href="/api/auth/logout">
          <span>
          <i class="ri-logout-circle-fill"></i>
            Logout
            </span>
            </a>
          </div>
          }
          <br />
        
          <p>We value your privacy. By signing in with Us, you agree to our Policies. <a  className="underline text-blue-500" href={"/policy"}> Read Our Privacy Policy </a></p>
          <p  onClick={toggleSingup}  className='underline'>
            {!user?
            "Continue Without Account"
          :"Close"}
            </p>
        </>
<>
</>
    </motion.div>
      </>
  );
}
