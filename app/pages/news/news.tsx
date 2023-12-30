import React from "react";
import Image from "next/image";





export default function News(){

    return (

        <div>
            <p className="bg-red-500 pt-[23px]">&nbsp;</p>
            <h1 className=" text-center text-black text-4xl font-bold pt-[39px]">In the News</h1>
            <div>
            {/* <Image
        src="/Screenshot (4782).jpg" 
        alt="Something" 
        width={500} 
        height={500} 
        className="mt-[38px] ml-[517px]"
      /> */}
                
            </div>

            <div className="mt-[0px] ml-[-232px]">
                <div className=" flex mt-[21px] ml-[666px]">
                    <span className="bg-red-500 text-lg font-bold p-[41px]"><p className=" border-4 border-black">YOURSTORY</p></span>
                    <span className="bg-[#FAEED1] text-lg font-bold p-[32px]">
                        <p>Meet blockchain startup</p>
                        <p>helping Maharashtra govt</p>
                        <p>issue digital certificates</p>
                        <p>to Gadchiroli tribals </p>
                        <a href="#" className="text-green-500">Read More</a>
                    </span>
                </div>
                <div className=" flex ml-[666px]">
                    <span className=" bg-[#B4D4FF] text-lg font-bold p-[33px]">
                        <p>India becomes the Fourth</p>
                        <p>Country to roll out</p>
                        <p>blockchain-powered</p>
                        <p>educational documents </p>
                        <a href="#" className="text-green-500">Read More</a>

                        </span>
                    <span className=" bg-violet-500 p-[37px] text-xl font-bold">
                        <p>BusinessLine</p>
                        </span>
                </div>
                <div className=" flex ml-[666px]" >
                    <span className=" bg-yellow-500  text-lg font-bold">
                    <p>The ContinentalGraph</p>
                        <p>Future of Money</p>
                        </span>
                    <span className=" bg-green-500  text-sm0 font-bold pl-[84px]  p-[8px]">
                       <p>Indian state govt uses</p>
                       <p>Polygon to issue verifiable</p>
                       <p>caste certificates </p>
                       <a href="#" className=" text-black">Read More</a>
                        </span>
                </div>
                <div className="mt-[-521px] ml-[1130px] ">
                
                    <span className=" bg-orange-500 text-lg font-bold inline-block mt-[0px] pl-[11px] ">
                        <p className=" mt-[177px] ml-[97px]" >Bloomberg</p>
                        </span>
                    
                </div>

                <div>
                <span className=" inline-block bg-gray-500 ml-[1129px] mt-[0px] p-[46px] text-lg font-bold">
                    <p>Can </p>
                    <p>Governments</p>
                    <p>Eliminate</p>
                    <p>Forged </p>
                    <p>Documents?</p>
                    <p>This Startup</p>
                    <p>Thinks So </p>
                    <a href="#" className="py-1 text-lg text-green-600">Name</a>
                    </span>

                </div>













               
            </div>
            










        </div>



    );





}







































