import React from "react";
import PhotoCollection from "@/app/components/photoCollection/photoCollection";






export default function CompanyTest() {



  return (

    <div>
     
      <div className="ml-[473px] mt-[104px]">
         <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zA8guDqfv40"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=""
      ></iframe>
      </div>
      <div className=" text-center mt-[72px] lg:text-5xl lg:font-bold sm:text-xl  sm:font-extrabold  ">
        <h2>Trusted by global enterprises and governments</h2>
      </div>
      <div>
        <PhotoCollection></PhotoCollection>

      </div>
     
 


    </div>








  );





}































