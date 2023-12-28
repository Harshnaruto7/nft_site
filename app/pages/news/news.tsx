import React from "react";
import Image from "next/image";





export default function News(){

    return (

        <div>
            <p className="bg-red-500 pt-[76px]">&nbsp;</p>
            <h1 className=" text-center text-black text-4xl font-bold pt-[39px]">In the News</h1>
            <div>
            <Image
        src="/Screenshot (4782).jpg" 
        alt="Something" 
        width={500} 
        height={500} 
        className="mt-[38px] ml-[517px]"
      />
                
            </div>
        </div>



    );





}







































