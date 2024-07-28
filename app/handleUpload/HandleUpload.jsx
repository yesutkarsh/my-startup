"use client";
import React, { useState, useEffect } from "react";
import style from "./upload.module.css";
import { storage } from "@/utils/firebase";
import { ref, uploadBytes } from "firebase/storage";
import * as pdfjsLib from "pdfjs-dist/webpack";

export default function HandleUpload() {
  const [pdf, setPdf] = useState("");

  // Options
  const [color, setColor] = useState(0);
  const [paperSize, setPaperSize] = useState(0);
  const [binding, setBinding] = useState(0);

  // Base Price
  const [base, setBase] = useState(0);

  // No Of Pages
  const [noOfPage, setNoOfPage] = useState(0);

  // Total Price
  const [price, setPrice] = useState(1);

  useEffect(() => {
    setBase(color + paperSize);
  }, [color, paperSize]);

  useEffect(() => {
    setPrice((noOfPage * base) + binding);
  }, [base, binding, noOfPage]);

  const pdfReceived = async (file) => {
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const pdfData = new Uint8Array(e.target.result);
          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
          setNoOfPage(pdf.numPages);
        };
        reader.readAsArrayBuffer(file);
      } catch (err) {
        console.error("Error reading PDF file:", err);
      }
    }
  };

  return (
    <>
      <div className={style.upload}>

        <form className={style.form}>
      <div className={style.dark}></div>
        <div className={style.lable}>Upload You PDF (Only PDF)</div>
          <input className="z-10"
            onChange={(e) => {
              pdfReceived(e.target.files[0]);
            }}
            type="file"
            accept=".pdf"
            required=""
            id="file-input"
          />
        </form>
        <div className={style.options}>
          <div className={style.dark}></div>
          <div className={style.lable}>What To Print</div>
          <select
            onChange={(e) => setBinding(Number(e.target.value))}
          >
            <option value={0}>Normal Print +₹0</option>
            <option value={125}>PDF/Notes To Book +₹125</option>
            <option value={50}>Spiral Binding +₹50</option>
          </select>

          <div className={style.lable}>Paper Size</div>
          <select
            onChange={(e) => setPaperSize(Number(e.target.value))}
          >
            <option value={0}> 75gsm A4 +₹0</option>
            <option value={1}> 75gsm A5 +₹1</option>
            <option value={2}> 75gsm B5 +₹2</option>
          </select>
          <div className={style.lable}>Color or B&W (Black and White)</div>
          <select
            onChange={(e) => setColor(Number(e.target.value))}
          >
            <option value={3}>Color (Single Side) +₹3</option>
            <option value={2.5}>Color (Double Side) +₹2.5</option>
            <option value={1.5}>B&W (Single Side) +₹1.5</option>
            <option value={1.2}>B&W (Double Side) +₹1.2</option>
          </select>
        </div>
      </div>
      <div className={style.price}>
        <div className={style.params}>
        <span> Per Page Cost: {base}</span>
        <span> Total Page: {noOfPage}</span>
        <span> Total Cost: {price}</span>
        </div>
        <button>PAY & ORDER</button>
      </div>
    </>
  );
}
