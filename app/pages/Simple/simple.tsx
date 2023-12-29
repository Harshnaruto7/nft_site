import React from "react";
import Style_2 from "./simpleStyle.module.css"






export default function SimplePage() {



  return (

    <div className={Style_2.backgroundImg}>

      <h1 className=" text-center text-white text-4xl pt-[65px] ">Simple. Smart. Scalable.</h1>

      {/* left  side text  */}
      <div className=" ml-[205px] mt-[32px]">
        <h3 className=" text-green-500 text-2x font-bold mb-3 ">EASE OF USE</h3>
        <div className=" text-white text-sm">
          <p>LegitDoc&apos;s simple SaaS </p>
          <p>experience allows clients to </p>
          <p>issue documents on-chain,  </p>
          <p>without having to learn</p>
          <p>about smart contract</p>
          <p>management, crypto </p>
          <p>management, fully gasless </p>
          <p>transactions, etc.</p>
        </div>
      </div>

      <div className=" ml-[205px] mt-[58px]">
        <div className=" text-green-500 text-2x font-bold mb-3 ">
          <h3 >HIGHER</h3>
          <h3 >TRANSACTION </h3>
          <h3 >THROUGHPUT</h3>
          <h3 >AND SCALABILITY </h3>
        </div>
        <div className=" text-white text-sm">
          <p>LegitDoc can handle billions </p>
          <p>of documents daily with  </p>
          <p>multiple users </p>
          <p>simultaneously issuing </p>
          <p>credentials and verifying</p>
          <p>them instantly. </p>
        </div>
      </div>

      {/* Right side text */}

      <div className=" ml-[1173px] mt-[-485px]">
        <div className=" text-green-500 text-2x font-bold mb-3 ">
          <h3 >Seamless system</h3>
          <h3 >integration and</h3>
          <h3 >customization </h3>

        </div>
        <div className=" text-white text-sm">
          <p>The API-based platform of  </p>
          <p>LegitDoc allows you to </p>
          <p>conveniently build your own</p>
          <p>applications and plug in to  </p>
          <p>your existing systems.</p>

        </div>
      </div>

      <div className=" ml-[1171px] mt-[54px]">
        <div className=" text-green-500 text-2x font-bold mb-3 ">
          <h3 >PRIVACY FIRST</h3>
        </div>
        <div className=" text-white text-sm">
          <p>No one, we repeat, no one  </p>
          <p>can access or view your</p>
          <p>documents except the </p>
          <p>issuers and the document</p>
          <p>holders. Not even us! </p>

        </div>
      </div>



      <div className=" ml-[1171px] mt-[65px]">
        <div className=" text-green-500 text-2x font-bold mb-3 ">
        <h3 >INSTANT VERIFICATION</h3>
        </div>
        <div className=" text-white text-sm">
        <p>10 seconds. That&apos;s all it takes </p>
          <p>to verify any document</p>
          <p>using LegitDoc. Seriously! </p>
        </div>
      </div>


      



    </div>








  );





}































