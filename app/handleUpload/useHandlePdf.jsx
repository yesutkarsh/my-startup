import React from 'react'

export default function useHandlePdf(pdf) {
   
    return pdfRecieved = async (file) => {
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
    
}
