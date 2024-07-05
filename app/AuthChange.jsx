import { auth } from '@/utils/firebase';
import { addUser, removeUser } from '@/utils/slices/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function AuthChange() {
    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        //   console.log('Auth state changed:', user);
          if (user) {
            dispatch(addUser(user));
          } else {
            dispatch(removeUser());
          }
        });
      
        return () => {
        //   console.log('Cleanup subscription');
          unsubscribe();
        }; // Cleanup subscription on unmount
      }, [dispatch]);
      

    

  return (
    <div></div>
  )
}
