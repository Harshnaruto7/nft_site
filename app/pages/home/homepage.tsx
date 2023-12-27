import React from "react";
import Navbar from "../../components/navbar/navbar";
import Styles from "./Home.module.css"
import Image from "next/image";






export default function HomePage() {



  return (

    <div>


      <div className={Styles.background}>
        <Navbar />
        <div className=" my-[302px] ml-10">
        <h1 className="text-white font-extrabold text-5xl  mb-6">LegitDoc®</h1>
        <p className=" text-white font-semibold text-2xl mb-5">A revolutionary platform
          for tamper-proof digital
          credential management</p>
          <p className="text-white font-thin text-xl mb-3">LegitDoc is a scalable, API-first platform 
          for enterprises and governments
          to issue and verify tamper-proof credentials on blockchain.</p>
          <p className="text-white font-light text-base mb-2">Built on: Ethereum polygon</p>
          <a className="text-green-500 underline font-semibold" href="#">Talk To OUR EXPERT </a>
          </div>
      </div>


    </div>








  );





}































