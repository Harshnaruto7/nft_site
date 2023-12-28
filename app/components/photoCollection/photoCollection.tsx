import React from "react";
import Image from "next/image";








export default function PhotoCollection() {



  return (

    <div className="grid grid-cols-8 gap-0 px-9 mt-4">
      <Image
        src="/listImage/1st.jpg" 
        alt="Something" 
        width={140} 
        height={140} 
      />
      <Image
        src="/listImage/2nd.webp" 
        alt="Something" 
        width={140} 
        height={140} 
      />
       <Image
        src="/listImage/3rd.png" 
        alt="Something" 
        width={140} 
        height={140} 
      />
       <Image
        src="/listImage/4th.png" 
        alt="Something" 
        width={140} 
        height={140} 
      />
      <Image
        src="/listImage/5th.jpg" 
        alt="Something" 
        width={140} 
        height={140} 
      />
        <Image
        src="/listImage/8th.png"
        alt="New" 
        width={140} 
        height={140} 
      />
        <Image
        src="/listImage/7th.webp" 
        alt="Something" 
        width={140} 
        height={140} 
      />
        <Image
        src="/listImage/6th.jpg" 
        alt="Something" 
        width={140} 
        height={140} 
      />



 


    </div>








  );





}































