import React from "react";
import Styles from "./Home.module.css"
import Image from "next/image";






export default function HomePage() {



  return (

    <div>




      <div className={Styles.background}>
        <div className=" mt-[173px] ml-[135px] ">
        <h1 className="text-white font-extrabold text-5xl  mb-6">LegitDoc<sup>®</sup></h1>

         <div className=" text-white font-semibold text-2xl mb-5">
          <p>A revolutionary platform</p>
          <p>for tamper-proof digital</p>
          <p>credential management</p>
         </div>
        
           <div className="text-white font-light text-xl mb-3">
              <p>LegitDoc is a scalable, API-first platform for enterprises and</p>
               <p>governments to issue and verify tamper-proof credentials on </p>  
                <p>blockchain.</p> 
           </div>
        
          <p className="text-white font-light text-base mb-2">Built on: Ethereum polygon</p>
          <a className="text-green-500 underline font-semibold mt-4 text-xl" href="#">Talk To OUR EXPERT </a>
          </div>
      </div>


    </div>








  );





}































