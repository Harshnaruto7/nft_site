import React from "react";
import Image from "next/image";





export default function Card(){

    return (

        <div>
        
        <div className="mt-[61px] ml-[575px]" >



        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row max-w-md">
    {/*  <!-- Image --> */}
    <figure className="flex-none w-1/3">
      <img
        src="https://picsum.photos/id/118/800/600"
        alt="card image"
        className="object-cover min-h-full aspect-auto"
      />
    </figure>
    {/*  <!-- Body--> */}
    <div className="flex-1 p-4 sm:mx-4 sm:px-0">
      <header className="flex gap-2 mb-2">
        <a
          href="#"
          className="relative inline-flex items-center justify-center w-8 h-8 text-white rounded-full"
        >
          <Image
            src="/tim-schmidbauer-l_o6qzchwX0-unsplash.jpg"
            alt="user name"
            title="user name"
            width={32}
            height={32}
            className="max-w-full rounded-full"
          />
        </a>
        <div>
          <h3 className="text-lg font-medium text-slate-700">
            A day in the sun
          </h3>
          <p className="text-xs text-slate-400"> By Sue, jun 3 2023</p>
        </div>
      </header>
      <p className="text-sm">
        After a walk through history, there is nothing left to do but admire
        the hypnotizing landscapes that exist in every direction. From vast
        deserts to rainbow mountains, and everything in between.
      </p>
    </div>
</div>


            


        </div>

        </div>



    );





}







































