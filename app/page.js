"use client"
import React from 'react'
import HomePage from './Routes/homeRoute/HomePage'

export default function page() {


  return (
    <>
    {console.log(process.env.hello)}
    <HomePage/>
    </>
  )
}
