import React from "react"
import Link from "next/link"
export default function page() {
  return (
    <>
    <div className="mt-[100px] m-5 p-10 bg-white rounded-[22px]">
    
   <h1 className="text-2xl">Terms and Conditions</h1>
   <br />
    <p style={{color:"grey"}}>Welcome to <span className="font-bold">Notes Wallah,</span> a print on demand service website. Please read these Terms of Use carefully. These Terms of Use govern your access and use of this Site. By accessing or using this Site you agree to be bound by these Terms of Use and to any additional guidelines, restrictions, or rules that may be posted in connection with specific sections or services of this Site. All such additional posted guidelines, restrictions, or rules are hereby incorporated by reference into these Terms of Use.</p>
    <br />
    <h1>User Obligations</h1>
    <p style={{color:"grey"}}>You must ensure that all files and content uploaded to our website are your original work or that you have the necessary permissions to use them.</p>
    <p style={{color:"grey"}}>You must ensure that all files and content comply with our acceptable use policy.</p>
    <br />
    <h1>Payment Terms</h1>
    <p style={{color:"grey"}}>We offers you multiple payment modes online and we use one of the best payment gateways. Our gateway partners use secure encryption technology to keep your transaction details confidential at all times. We  also accepts payment made using Cards like Visa, MasterCard, Maestro, American Express, and credit/debit cards in India. You can also use internet banking, your PayTm wallet or UPI based available through our gateway to making payment.</p>
    <br />
    <p style={{color:"grey"}} >There are no hidden charges when you order on printster.in. The price mentioned after the creation of the order is final and the price you see on the payment page is exactly what you have to pay. </p>

    <br />
    <h1>Refund Policy</h1>
    <li  style={{color:"grey"}}>We offer a 7 days money-back guarantee.</li>
    <li  style={{color:"grey"}}>Refunds will be issued in the original payment method.</li>
    <li  style={{color:"grey"}}>We share the correct invoice to the customer through mail for each order placed on our website. Please refer the invoice shared through mail for any clarifications.</li>

    <Link href={"/contact"}>
    <p style={{color:"blue"}}>Click Know More About refund </p>
    </Link>
    <br />

    <h1> Governing Law</h1>
    <p style={{color:"grey"}} >These Terms and Conditions are governed by the laws of India.</p>
    <br />

    <h1> Changes to Terms and Conditions</h1>
    <p style={{color:"grey"}} >These Terms and Conditions are governed by the laws of India.</p>
    <br />

    <h1> Confidentiality</h1>
    <p style={{color:"grey"}} >Your files uploaded by you shall be deleted as soon as the printout is taken and shall not be shared with anyone or stored with printster under any circumstances. The Document remains the property of its copyright holder at all times. <br /> It is Your responsibility to ensure that You hold copyright, or have permission from the copyright holder, for the reproduction of all text, images, designs, and any other intellectual property contained in all Electronic Files uploaded to www.printster.in for printing and/or binding. <br /> We Do not Print Certificates / Mark-sheets Issued by any Government Authority or Any Other Institutions. If Still the Customer Places the order for the same, then we will print COPY or DUPLICATE on the same.</p>
    <br />


    <h1> Delivery Terms & Conditions -</h1>
    <p style={{color:"grey"}} >That in the event that a non-delivery occurs on account of a mistake by you (i.e. wrong name or address or any other wrong information) any extra cost incurred by Notes Wallah for redelivery shall be claimed from you. <br /> Delivery Timing will be calculated from the Next Working day of the Order placed. <br /> 
    
    <p style={{color:"grey"}} >Any claims for damage and/or shortages MUST be reported in 48 hours without exception. Be sure to check your deliveries upon receipt. </p>
    </p>
    <br />
    <h1>Contact Us</h1>
    <p style={{color:"grey"}} >If you have any questions or concerns, please contact us at:
        <li>contactutkarshverma@proton.me</li>
        <li>7985748915</li>
        <li>7390748915</li>
    </p>
    <br />
<p>By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>

    </div>
<h1> LAST UPDATED ON: 26/07/2024</h1>
    </>
  )
}
