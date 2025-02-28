"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/utils/store";
// import AuthChange from "./AuthChange";
import Script from 'next/script';
import NavBar from "./components/Navbar/NavBar";
import NextTopLoader from "nextjs-toploader";


// auth0
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children }) {
  

  

  
  return (

    <Provider store={store}>
    <html lang="en">
      <head>

        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
          />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Playwrite+FR+Moderne:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

     
        </head>
      
      <UserProvider>
      <body className={inter.className}>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive" // Ensures the script is loaded before user interaction
        />
      <NavBar/>
      <NextTopLoader
      height={4}
      color="black"
      />
    
        {
          children
        }
      </body>
        </UserProvider>
    </html>
    </Provider>

  );
}
