"use client";

import Image from "next/image";

import Navbar from "../navbar/page";
import Footer from "../Home/footer";
import GiftSection from "./giftsection";
import WhatsAppButton from "../whatsapp";



export default function section() {
  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <GiftSection/>
    <Footer/>
    </>
  );
}