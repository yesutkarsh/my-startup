"use client";
import React from 'react'
import { useState } from "react";
import style from "./upload.module.css";
import { storage } from "@/utils/firebase";
import { ref, uploadBytes } from "firebase/storage";
import * as pdfjsLib from "pdfjs-dist/webpack";
export default function HandleUpload() {
    const [pdf, setPdf] = useState("");


    // Options
    const [color, setColor] = useState(0)
  
    const [paperSize, SetPaperSize] = useState(0)
  
    const [side, setSide] = useState(0)
  
    var base
  
  // No Of Pages
    const [noOfPage, setNoOfPage] = useState(0);
    
  
  
  // Total Price
    const [price, setPrice] = useState(1) 
  
  
  
  const calculatePrice = ()=>{
    base = color+paperSize+side
    console.log("Base = " + base)
    console.log("Chnage IN Paper Size = " + paperSize)
    setPrice(100*base)
  }
  
  
  
  
  
  
  
  
  
  
  
  
   
    const pdfRecieved = async(file) =>{
      if(file){
        var reader = new FileReader();
        reader.onload = async (e) => {
          const pdfData = new Uint8Array(e.target.result);
          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
          setNoOfPage(pdf.numPages);
          
        };
      }try {
        reader.readAsArrayBuffer(file);
      } catch (err) {
        console.log(err);
      }
     
    }
   
  
  
    const UploadPdf = () => {
      const pdfRef = ref(storage, `files/${userEmail}`);
      uploadBytes(pdfRef);
    };
  
  return (
    <>
    
    <div className={style.upload}>
      <form className={style.form}>
        <span className={style.formtitle}>Upload your PDF</span>

        <label className={style.dropcontainer}>
          <input onChange={(e)=>{
            pdfRecieved(e.target.files[0])
            }} type="file" accept=".pdf" required="" id="file-input" />
        </label>
      </form>
      <div className={style.options}>
 

        <select onChange={(e)=>{
          SetPaperSize(Number(e.target.value))
          }}>
          <option value={0}>Select</option>
          <option value={1}>A4 1</option>
          <option value={1}>A5 1</option>
          <option value={2}>B5 2</option>
        </select>

        <select onChange={(e)=>{
          setColor(Number(e.target.value))
        }}>
          <option value={0}>Select</option>
          <option value={4}>Color</option>
          <option value={1}>Black And White</option>
        </select>
    
    
      </div>
      <div className={style.price}>
          <span onClick={calculatePrice}>Calculate Price</span>

        <span>₹ {price}</span>
        <button>PAY & ORDER</button>

      </div>
    </div>
    
    
    </>
  )
}
