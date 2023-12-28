import React from "react";





export default function Navbar(){



  return (

    
    <>
   
    <nav className=" bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-5xl font-bold">Zupple</a>

              
            </div>

          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex item-center space-x-4">
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Team 
              </a>
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                FAQ
              </a>
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                ISSUER
              </a>
              <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2  ">
                 Blog
              </a>
              <a href="/" className="text-black bg-white  rounded-lg p-2  ">
                 Get In Touch 
              </a>

            </div>

          </div>

        </div>

      </div>

    </nav>

    </>


    
    








  );





}































