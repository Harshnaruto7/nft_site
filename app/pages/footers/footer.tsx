import React from "react";
import Image from "next/image";
import Footercompo from "@/app/components/footer/footercompo";





export default function Footer() {

    return (


        <div>
            <div  className="lg:ml-[0px] lg:mt-[0px] ml-[-2047px] mt-[879px]">
            <Image
                src="/newSmallImg.jpg"
                alt="Description of the image"
                width={500}
                height={300}
                layout="responsive"
               
            />


            </div>
           


            <div className="lg:mt-[-213px] lg:ml-[120px] ml-[8px] mt-[-321px] ">
                <div className="text-white text-3xl font-extrabold">
                    <h1>Issue and verify credentials</h1>
                    <h1>instantly on blockchain with</h1>
                    <h1>LegitDoc</h1>
                </div>
                <div className="text-green-500 py-2 underline text-lg font-extrabold">
                    <a href="#">Get in touch</a>
                </div>
            </div>
            <div>
                <h1 className="text-black px-10 mt-[119px] ml-[384px] text-4xl font-extrabold">The Zupple suite of products and services</h1>

                {/* Card component 1 */}
                <div>
                    <div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-600 mt-[65px] ml-[390px]  ">
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2 text-white py-5">
                                    <h1>LegitDoc</h1>
                                </div>
                                <div className="text-white">
                                <p >A patent-filed blockchain-based system for </p>
                                <p >issuing tamper-proof digital credentials</p>
                                <p >issuing tamper-proof digital credentials</p>
                                <p >anywhere around the world, in just 10 </p>
                                <p >seconds!</p>
                                </div>              
                            </div>
                            <div className="py-5 text-white underline text-lg font-bold">
                                <a href="#" className="px-4">View Example</a>
                                <a href="#">Download Whitepaper</a>
                            </div>
                        </div>
                    </div>


                </div>
                 {/* Card component 2*/}
                 <div>
                    <div className="mt-[-303px] ml-[815px]">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-500  ">
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2 text-white py-5">
                                Identity Management
                                    </div>
                                    <div className="text-white">
                                <p >A patent-filed blockchain-based system for </p>
                                <p >issuing tamper-proof digital credentials</p>
                                <p >issuing tamper-proof digital credentials</p>
                                <p >anywhere around the world, in just 10 </p>
                                <p >seconds!</p>
                                </div>
                            </div>
                            <div className="py-5 text-white underline text-lg font-bold">
                            <a href="#" className="px-4">View Example</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
              
              {/* last footer */}
            <div className="bg-red-600 py-[61px] mt-[244px]">
                <h1 className="ml-[170px] text-6xl font-extrabold text-white">ZUPPLE</h1>
            </div>
            <div className="ml-[15px] mt-[-102px]">
                <p className="ml-[402px] text-sm text-white font-light">“Unpuzzle the new web”</p>
            </div>



            <div>
            <div className="mt-[-29px] " >
                <a href="#" className="ml-[1222px] mt-[-107px] text-lg text-white font-bold hover:underline">FAQs</a>
            </div>
            <div  className="mt-[-29px] ml-[909px]">
                <a href="#" className="ml-[450px] mt-[-102px] text-lg text-white font-bold hover:underlines">Blogs</a>
            </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold ml-[45px] mt-[167px]">© 2022 Zupple Labs - All Rights Reserved.</h1>
            </div>
            

        </div>












    );














}
































