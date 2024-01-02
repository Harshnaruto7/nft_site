import React from "react";
import PhotoCollection from "@/app/components/photoCollection/photoCollection";
import Style from "./companytest.module.css"





export default function CompanyTest() {



  return (

    <div>
     
      <div className="lg:ml-[473px] lg:mt-[104px] ml-[44px] mt-[140px]">
         <iframe
        src="https://www.youtube.com/embed/zA8guDqfv40"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      className={Style.responsiveIframe}
      ></iframe>
      </div>
      <div className=" text-center lg:mt-[72px]  lg:text-5xl lg:font-bold text-xl  font-bold  ">
        <h2>Trusted by global enterprises and governments</h2>
      </div>
      <div>
        <PhotoCollection></PhotoCollection>

      </div>
     
 


    </div>








  );





}































