"use client"
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HandleUpload'), {
  ssr: false
});


export default function page() {

  return (
    <>
    

<DynamicComponent/>

    </>






  );
}
