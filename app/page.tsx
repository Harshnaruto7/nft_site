import React from "react";
import  {HomePage,CompanyTest,SimplePage,Document,SuccessFullImp,News,Footer} from './index'
import Navbar from "./components/navbar/navbar";






export default function Page(){



  return (

    <div>
      <Navbar></Navbar>
      <section><HomePage></HomePage></section>
      <section><CompanyTest></CompanyTest></section>
      <section><SimplePage></SimplePage></section>
      <section><Document></Document></section>
      <section className="bg-[#655DBB]"><SuccessFullImp></SuccessFullImp></section>
      {/* <section className="bg-[#655DBB]"></section> */}
      <section><News></News></section>
      <section><Footer></Footer></section>
      <section></section>
  
     
    </div>








  );





}































