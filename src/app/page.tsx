import Navbar from "./navbar/page"

import Footer from "./Home/footer"
import HomePage from "./homePages/page";
import WhatsAppButton from "./whatsapp";




export default function Home() {
  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <HomePage/>
    <Footer />
   
    </>
  );
}
