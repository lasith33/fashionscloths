"use client";

import Image from "next/image";

import Navbar from "../navbar/page";
import Footer from "../Home/footer";
import WomanSection from "./woman";
import WhatsAppButton from "../whatsapp";



export default function section() {
  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <WomanSection/>
    <Footer/>
    </>
  );
}