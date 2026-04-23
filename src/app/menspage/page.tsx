"use client";

import Image from "next/image";
import MensSection from "./men";
import Navbar from "../navbar/page";
import Footer from "../Home/footer";
import WhatsAppButton from "../whatsapp";



export default function section() {
  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <MensSection/>
    <Footer/>
    </>
  );
}