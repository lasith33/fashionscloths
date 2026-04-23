"use client";

import Image from "next/image";
import Navbar from "../navbar/page";
import Footer from "../Home/footer";
import KidsSection from "./kidspage";
import WhatsAppButton from "../whatsapp";



export default function section() {
  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <KidsSection/>
    <Footer/>
    </>
  );
}